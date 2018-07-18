package com.example.t3.comment.model;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reply {
	  private int r_no;
	  private int c_no;
	  private String r_writer;
	  private String r_pw;
	  private String r_content;
	  private Date r_date;
}
