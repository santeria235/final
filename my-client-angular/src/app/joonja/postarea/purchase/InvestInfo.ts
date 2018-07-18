export class InvestInfo {
//   `i_id`           INT            NOT NULL AUTO_INCREMENT    COMMENT '순번',
// `u_id`           VARCHAR(50)    NOT NULL                   COMMENT '유저아이디',
// `d_pageno`       INT            NOT NULL                   COMMENT '페이지번호',
// `i_investmoney`  INT			   NOT NULL DEFAULT 0		   COMMENT '투자금액',
//
  public i_id : number = 0;
  public u_id : string;
  public d_pageno : number;
  public i_investmoney : number;
}
