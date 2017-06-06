package com.lavain.backend.dao;

import com.lavain.backend.model.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by User on 2017/6/7.
 */
public interface CommentDao extends CrudRepository<Comment, Long>{
    Comment save(Comment comment);
    Comment findOne(Long commentId);
    List<Comment> findByPhotoId(Long photoId);
}
