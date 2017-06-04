package com.lavain.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by User on 2017/6/4.
 */
@RestController
@RequestMapping("/rest")
public class UserResources {
    @RequestMapping("/user/users")
    public String loginSuccess() {
        return "Login Successful!";
    }
}
