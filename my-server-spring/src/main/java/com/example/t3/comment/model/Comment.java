package com.example.t3.comment.model;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
	  private int c_no;
	  private int d_pageno;
	  private String c_writer;
	  private String c_pw;
	  private String c_content;
	  private Date c_date;
	

	
}
