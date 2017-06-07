package com.lavain.backend.dao;

import com.lavain.backend.model.Photo;
import com.lavain.backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by User on 2017/6/5.
 */
@Repository
public interface PhotoDao extends CrudRepository<Photo, Long> {

    Photo save(Photo photo);

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);

    List<Photo> findAll();
}
