package com.levent;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Created by User on 2017/3/17.
 */
@Component
@ConfigurationProperties(prefix = "girl")
public class GirlProperties {
    private int age;
    private String cupSize;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCupSize() {
        return cupSize;
    }

    public void setCupSize(String cupSize) {
        this.cupSize = cupSize;
    }
}
