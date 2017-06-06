package com.lavain.backend.service;

import com.lavain.backend.model.Comment;

import java.util.List;

/**
 * Created by User on 2017/6/7.
 */
public interface CommentService {

    Comment save(Comment comment);
    Comment findOne(Long commentId);
    List<Comment> findByPhotoId(Long photoId);
}
