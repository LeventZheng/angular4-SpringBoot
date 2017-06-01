package com.levent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 2017/3/18.
 */
@RestController
@RequestMapping(value = "girl")
public class GirlController {

    @Autowired GirlRepository girlRepository;
    @GetMapping( value = "/girls")
    public List<Girl> girlList() {
        return girlRepository.findAll();
    }

    @PutMapping(value = "/add")
    public Girl add(@RequestParam(value = "cupSize") String cupSize,
                     @RequestParam( value = "age") Integer age) {
        Girl girl = new Girl();
        girl.setCupSize(cupSize);
        girl.setAge(age);
        return girlRepository.save(girl);
    }

    @DeleteMapping(value = "/delete")
    public String delete(@RequestParam(value = "id") Integer id) {
        girlRepository.delete(id);
        return "success";
    }

    @GetMapping(value = "/get")
    public Girl get(@RequestParam(value = "id") Integer id) {
        return girlRepository.findOne(id);
    }

    @GetMapping(value = "/findByAge")
    public List<Girl> findByAge (@RequestParam(value = "age") Integer age) {
        return girlRepository.findByAge(age);
    }
}
