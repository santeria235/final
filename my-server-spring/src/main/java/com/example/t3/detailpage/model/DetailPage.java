package com.example.t3.detailpage.model;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailPage {

	private int dp_pageno;
    private String dp_title;
    private String u_name;
    private String dp_category;
    private int dp_goalmoney;
    private int dp_currentmoney;
    private String dp_content;
    private String dp_img;
    private String dp_hashtags;
    private int dp_likeCount;
    private int dp_commentCount;
    private int dp_viewCount;
    private Date dp_date;
    
}
