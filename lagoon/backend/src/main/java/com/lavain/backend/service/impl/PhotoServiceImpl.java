package com.lavain.backend.service.impl;

import com.lavain.backend.dao.PhotoDao;
import com.lavain.backend.model.Photo;
import com.lavain.backend.model.User;
import com.lavain.backend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by User on 2017/6/5.
 */
@Service
public class PhotoServiceImpl implements PhotoService{
    @Autowired
    private PhotoDao photoDao;

    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    public List<Photo> findByUser(User user) {
        return  photoDao.findByUser(user);
    };

    public Photo findByPhotoId(Long photoId) {
        return photoDao.findByPhotoId(photoId);
    };

    public  List<Photo> findAll() {
        return photoDao.findAll();
    };
}
