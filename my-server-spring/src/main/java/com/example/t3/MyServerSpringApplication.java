package com.example.t3;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.example.t3.detailpage.model.DetailPage;
import com.example.t3.detailpage.repository.DetailPageMapper;

@Configuration
@EnableAutoConfiguration(exclude = { DataSourceTransactionManagerAutoConfiguration.class, DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = "com.example.t3")
public class MyServerSpringApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MyServerSpringApplication.class, args);
	}

	@Autowired
	DetailPageMapper detailPageMapper;
	
	@Override
	public void run(String... args) throws Exception {
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(1111, "스타트업 아이디어", "이상오", 
//				2000, 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				0,0,0,new Date()));

//		private int d_pageno;
//	    private String d_title;
//	    private String u_id;
//	    private int c_id;
//	    private int d_goalmoney;
//	    private int d_currentmoney;
//	    private String d_content;
//	    private String d_img;
//	    private int d_likeCount;
//	    private int d_commentCount;
//	    private int d_viewCount;
//	    private Date d_date;
	}
	
//	@Autowired
//	private LoginInterceptor loginInterceptor;
//
//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(loginInterceptor)
//			.addPathPatterns("/boards/write/**")
//			.addPathPatterns("/boards/update/**")
//			.addPathPatterns("/boards/delete/**");
//	}
}
