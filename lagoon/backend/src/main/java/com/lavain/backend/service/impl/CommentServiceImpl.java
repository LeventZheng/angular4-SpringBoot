package com.lavain.backend.service.impl;

import com.lavain.backend.dao.CommentDao;
import com.lavain.backend.model.Comment;
import com.lavain.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by User on 2017/6/7.
 */
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentDao commentDao;

    public Comment save(Comment comment) {
        return commentDao.save(comment);
    }

    public Comment findOne(Long commentId) {
        return commentDao.findOne(commentId);
    }

    public List<Comment> findByPhotoId(Long photoId) {
        return commentDao.findByPhotoId(photoId);
    };
}
