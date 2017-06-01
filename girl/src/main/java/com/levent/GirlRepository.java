package com.levent;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by User on 2017/3/18.
 */
public interface GirlRepository extends JpaRepository<Girl, Integer> {
    public List<Girl> findByAge(Integer age);
}
