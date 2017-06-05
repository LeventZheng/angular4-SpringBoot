package com.lavain.backend.controller;

import com.lavain.backend.model.Photo;
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

/**
 * Created by User on 2017/6/5.
 */
@RestController
@RequestMapping("/rest")
public class PhotoResources {

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
}
