package com.levent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

/**
 * Created by User on 2017/3/17.
 */
@RestController
@RequestMapping(value = "/hello")
public class HelloController {
    @Value("${cupSize}") private String cupSize;

    @Autowired
    private GirlProperties girlProperties;
    @RequestMapping(value = {"/hello", "/hi"}, method = RequestMethod.GET)
    public String Say(){
        return "Hello SpringBoot!" + this.cupSize + this.girlProperties.getAge();
    }
    @GetMapping("/{id}/run")
    private String Run(@PathVariable(value = "id") Integer id){
        return "Let's go" + id;
    }

    @GetMapping("/see")
    private String See(@RequestParam(value = "id", required = false, defaultValue = "-1") Integer myId) {
        return "see" + myId;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    private String add() {
        return this.girlProperties.getCupSize();
    }
    @PostMapping(value = "/get")
    private String get (@RequestParam(value = "name") String name) {
        return name;
    }
}
