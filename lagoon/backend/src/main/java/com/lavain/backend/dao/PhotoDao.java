package com.lavain.backend.dao;

import com.lavain.backend.model.Photo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by User on 2017/6/5.
 */
@Repository
public interface PhotoDao extends CrudRepository<Photo, Long> {

    Photo save(Photo photo);


}
