package com.example.t3.category.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
	private int c_id;
	private String c_name;
}
//`c_id`         INT             NOT NULL    COMMENT '카테고리 번호', 
//`c_name`       VARCHAR(30)     NOT NULL    COMMENT '카테고리 이름', 