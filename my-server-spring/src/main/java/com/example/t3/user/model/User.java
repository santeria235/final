package com.example.t3.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	private String u_id;
	private String u_pw;
	private String u_name;
	private char u_isAdmin;
	
//    `u_id`         VARCHAR(50)     NOT NULL                COMMENT '이메일(계정아이디)', 
//    `u_pw`         VARCHAR(20)     NOT NULL                COMMENT '비밀번호', 
//    `u_name`       VARCHAR(20)     NOT NULL                COMMENT '이름', 
//    `u_isAdmin`    CHAR(1)         NOT NULL    DEFAULT 'F' COMMENT '관리자여부',
}
