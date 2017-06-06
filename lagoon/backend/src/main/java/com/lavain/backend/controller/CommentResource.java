package com.lavain.backend.controller;

import com.lavain.backend.model.Comment;
import com.lavain.backend.model.Photo;
import com.lavain.backend.service.CommentService;
import com.lavain.backend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by User on 2017/6/7.
 */
@RestController
@RequestMapping("/rest")
public class CommentResource {

    @Autowired
    private PhotoService photoService;

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "/comment/add", method = RequestMethod.POST)
    public void addComment(@RequestBody Comment comment) {
        Photo photo = photoService.findByPhotoId((comment.getPhotoId()));
//        List<Comment> commentList = photo.getCommentList();
        comment.setPhoto(photo);
        commentService.save(comment);
    }
}
