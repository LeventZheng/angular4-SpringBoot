package com.lavain.backend.controller;

import com.lavain.backend.model.Photo;
import com.lavain.backend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by xhjy on 2017/6/7.
 */
@RestController
@RequestMapping("/photo")
public class PhotoController {
    @Autowired
    private PhotoService photoService;

    // 默认是get方式
    @RequestMapping(value = "/allPhotos")
    public List<Photo> getAllPhotos() {
        return photoService.findAll();
    }
}
