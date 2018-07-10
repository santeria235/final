DROP table t3_user;
CREATE TABLE t3_user
(
    `u_id`         VARCHAR(50)     NOT NULL    COMMENT '이메일(계정아이디)', 
    `u_pw`         VARCHAR(20)     NOT NULL    COMMENT '비밀번호', 
    `u_name`       VARCHAR(20)     NOT NULL    COMMENT '이름', 
    `u_profileImg` VARCHAR(200)					  COMMENT '프로필사진', 
    `u_isAdmin`    CHAR(1)         NOT NULL    COMMENT '관리자여부',
    PRIMARY KEY (u_id)
);

drop table t3_investinfo;
CREATE TABLE t3_investinfo(
    `i_id`         INT           NOT NULL AUTO_INCREMENT    COMMENT '순번', 
    `u_id`         VARCHAR(50)   NOT NULL                   COMMENT '유저아이디', 
    `d_pageno`    INT           NOT NULL                   COMMENT '페이지번호', 
    `i_investmoney`  INT			   NOT NULL DEFAULT 0		   COMMENT '투자금액', 
    PRIMARY KEY (i_id),
    FOREIGN KEY (`u_id`) REFERENCES `t3_user`(`u_id`),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
);

CREATE TABLE t3_detailpage_hashtags(
    `h_id`            INT        AUTO_INCREMENT    COMMENT '순번' ,
    `d_pageno`       INT           NOT NULL    COMMENT '페이지번호', 
    `hashtag`      VARCHAR(20)      NOT NULL    COMMENT '해쉬태그', 
    PRIMARY KEY (h_id),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
);

drop table t3_categories;
CREATE TABLE t3_categories
(
    `c_id`         INT             NOT NULL    COMMENT '카테고리 번호', 
    `c_name`       VARCHAR(30)     NOT NULL    COMMENT '카테고리 이름', 
    PRIMARY KEY (c_id)
);


drop table detailpage;
CREATE TABLE t3_detailpage
(
    `d_pageno`       INT    AUTO_INCREMENT NOT NULL    COMMENT '페이지번호', 
    `d_title`        VARCHAR(20)           NOT NULL    COMMENT '상품명', 
    `u_id`           VARCHAR(50)           NOT NULL    COMMENT '작성자 이메일(계정)',  
    `c_id`           INT                   NOT NULL    COMMENT '상품 카테고리 ID', 
    `d_goalmoney`    INT                   NOT NULL    COMMENT '목표금액', 
    `d_currentmoney` INT                   NOT NULL    COMMENT '현재금액', 
    `d_content`      blob                  NOT NULL    COMMENT '상품내용', 
    `d_img`          VARCHAR(200)          NOT NULL    COMMENT '상품이미지', 
    `d_likeCount`    INT                   NOT NULL    COMMENT '좋아요', 
    `d_commentCount` INT                   NOT NULL    COMMENT '코멘트수', 
    `d_viewCount`    INT                   NOT NULL    COMMENT '조회수', 
    `d_date`         DATE   DEFAULT now()  NOT NULL    COMMENT '등록일시', 
    PRIMARY KEY (d_pageno),
    FOREIGN KEY (`c_id`) REFERENCES `t3_categories`(`c_id`),
    FOREIGN KEY (`u_id`) REFERENCES `t3_user`(`u_id`)
);


SET foreign_key_checks = 0;
drop table tm_comment;

SET foreign_key_checks = 0;
drop table tm_reply;

CREATE TABLE t3_comment
(
    `c_no`             INT                         NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `c_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자', 
    `c_writer_email`   VARCHAR(200)                NOT NULL                   COMMENT '작성자 이메일', 
    `c_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용', 
    `c_date`           DATE          DEFAULT now() NOT NULL                   COMMENT '작성일시', 
    PRIMARY KEY (c_no)
); 

CREATE TABLE t3_reply
(
    `c_no`             INT                         NOT NULL                   COMMENT '게시글번호', 
    `r_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자', 
    `r_writer_email`   VARCHAR(200)                NOT NULL                   COMMENT '작성자 이메일', 
    `r_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용', 
    `r_date`           DATE          DEFAULT now() NOT NULL                   COMMENT '작성일시', 
	 FOREIGN KEY (`c_no`) REFERENCES `tm_comment`(`c_no`)
); 


Insert into Table t3_detailpage(`d_pageno`,d_title`,`u_id`,`c_id`,`d_goalmoney`,`d_currentmoney`  
    `d_content`,`d_img`,`d_likeCount`,`d_commentCount`,`d_viewCount`,`d_date`)
	 Values(Data1, Data2, Data3...)
	 
select * from t3_categories;
Insert into t3_categories Values('100','소셜/아이디어');
Insert into t3_categories(c_id,c_name) Values(200,'디자인');
Insert into t3_categories(c_id,c_name) Values(300,'엔지니어링');
Insert into t3_categories(c_id,c_name) Values(400,'성금모금');
Insert into t3_categories(c_id,c_name) Values(500,'스타트업');
Insert into t3_categories(c_id,c_name) Values(600,'기타');

insert into t3_user values('santeria235@gmail.com','1234','이상오','temp','T');

insert into t3_detialpage
values(1, '제목','santeria235@gmail.com',100,30000000,0,
'내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리',
'이미지url',0,0,0,CURRENT_TIMESTAMP());
    `d_pageno`       INT                  NOT NULL    COMMENT '페이지번호', 
    `d_title`        VARCHAR(20)          NOT NULL    COMMENT '상품명', 
    `u_id`           VARCHAR(50)          NOT NULL    COMMENT '작성자 이메일(계정)',  
    `c_id`           INT                  NOT NULL    COMMENT '상품 카테고리 ID', 
    `d_goalmoney`    INT                  NOT NULL    COMMENT '목표금액', 
    `d_currentmoney` INT                  NOT NULL    COMMENT '현재금액', 
    `d_content`      blob                 NOT NULL    COMMENT '상품내용', 
    `d_img`          VARCHAR(200)         NOT NULL    COMMENT '상품이미지', 
    `d_likeCount`    INT                  NOT NULL    COMMENT '좋아요', 
    `d_commentCount` INT                  NOT NULL    COMMENT '코멘트수', 
    `d_viewCount`    INT                  NOT NULL    COMMENT '조회수', 
    `d_date`         DATE   DEFAULT now() NOT NULL    COMMENT '등록일시', 
    PRIMARY KEY (d_pageno),
    FOREIGN KEY (`c_id`) REFERENCES `t3_categories`(`c_id`),
    FOREIGN KEY (`u_id`) REFERENCES `t3_user`(`u_id`)
    
