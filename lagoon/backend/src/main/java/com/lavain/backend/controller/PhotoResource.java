package com.lavain.backend.controller;

import com.lavain.backend.model.Photo;
import com.lavain.backend.model.User;
import com.lavain.backend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

/**
 * Created by User on 2017/6/5.
 */
@RestController
@RequestMapping("/rest")
public class PhotoResource {

    private String imageName;

    @Autowired
    private PhotoService photoService;

    @RequestMapping(value = "photo/upload", method = RequestMethod.POST)
    public String upload (HttpServletResponse response, HttpServletRequest request) {
        MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
        Iterator<String> it = multipartHttpServletRequest.getFileNames();
        MultipartFile multipartFile = multipartHttpServletRequest.getFile(it.next());
        String fileName = multipartFile.getOriginalFilename();
        imageName = fileName;

        String path = new File("src/main/resources/static/images").getAbsolutePath() + "/" + fileName;

        try {
            multipartFile.transferTo(new File(path));
            System.out.println(path);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Upload Image Success!";
    }

    @RequestMapping(value = "/photo/add", method = RequestMethod.POST)
    public Photo addPhoto(@RequestBody Photo photo) {
        photo.setImageName(imageName);
        return photoService.save(photo);
    }

    @RequestMapping(value = "/photo/user", method = RequestMethod.POST)
    public List getPhotoByUser(@RequestBody User user) {

        return photoService.findByUser(user);
    }

    @RequestMapping(value = "/photo/photoId", method = RequestMethod.POST)
    public Photo getPhotoByPhotoId(@RequestBody Long photoId) {
        return photoService.findByPhotoId(photoId);
    }

    @RequestMapping(value = "/photo/update", method = RequestMethod.POST)
    public void updatePhoto(@RequestBody Photo photo) {
        Photo currentPhoto = photoService.findByPhotoId(photo.getPhotoId());
        currentPhoto.setLikes(photo.getLikes());
        // 这里不直接使用photo传参对象而拿id去获取，是因为photo model中
        // User使用了注解@JsonBackReference或者@JsonIgnore
        // 以JSON的格式保存可能会丢失
        photoService.save(currentPhoto);
    }
}
