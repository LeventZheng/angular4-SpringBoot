package com.lavain.backend.dao;

import com.lavain.backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by User on 2017/6/4.
 */
@Repository
public interface UserDao extends CrudRepository<User, Long> {
    User save(User user);
}
