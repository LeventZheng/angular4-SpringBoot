package com.lavain.backend.service.impl;

import com.lavain.backend.dao.UserDao;
import com.lavain.backend.model.User;
import com.lavain.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by User on 2017/6/4.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    public User save( User user) {
        return userDao.save(user);
    }

}
