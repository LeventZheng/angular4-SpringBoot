package com.lavain.backend;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.lavain.backend.config.JwtFilter;

@SpringBootApplication
public class BackendApplication {

	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter((Filter) new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*");

		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
