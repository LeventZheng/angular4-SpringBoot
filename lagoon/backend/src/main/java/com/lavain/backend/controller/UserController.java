package com.lavain.backend.controller;

import com.lavain.backend.model.User;
import com.lavain.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by User on 2017/6/4.
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public User requestUser(@RequestBody User user) {
        return userService.save(user);
    }

}
