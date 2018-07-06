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
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(2222, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(3333, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(4444, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(5555, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(6666, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		detailPageMapper.insert(new DetailPage(7777, "스타트업 아이디어", "이상오", 
//				"아이디어", 30000000, 0, "본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용본문컨텐츠내용", "imgLocation", 
//				"아이디어,창업",0,0,0,new Date()));
//		private int dp_pageno;
//	    private String dp_title;
//	    private String u_name;
//	    private String dp_category;
//	    private int dp_goalmoney;
//	    private int dp_currentmoney;
//	    private String dp_content;
//	    private String dp_img;
//	    private String dp_hashtags;
//	    private int dp_likeCount;
//	    private int dp_commentCount;
//	    private int dp_viewCount;
//	    private Date dp_date;
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
