package com.lavain.backend.service;

import com.lavain.backend.model.Photo;
import com.lavain.backend.model.User;

import java.util.List;

/**
 * Created by User on 2017/6/5.
 */
public interface PhotoService {
    Photo save(Photo photo);

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);

    List<Photo> findAll();
}
