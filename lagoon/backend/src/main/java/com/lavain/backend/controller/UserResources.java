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
@RequestMapping("/rest")
public class UserResources {

    @Autowired
    private UserService userService;

    @RequestMapping("/user/users")
    public String loginSuccess() {
        return "Login Successful!";
    }

    @RequestMapping(value = "/user/username", method = RequestMethod.POST)
    public User findByUserName(@RequestBody String userName) {
        return userService.findByUserName(userName);
    };
}
