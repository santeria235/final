package com.example.t3.investInfo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvestInfo {
//	  public i_id : number = 0;
//	  public u_id : string;
//	  public d_pageno : number;
//	  public i_investmoney : number;
	
	private int i_id;
	private String u_id;
	private int d_pageno;
	private int i_investmoney;


}
