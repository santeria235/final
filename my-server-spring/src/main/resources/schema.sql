

CREATE TABLE t3_user
(
    `u_id`         VARCHAR(50)     NOT NULL                COMMENT '이메일(계정아이디)', 
    `u_pw`         VARCHAR(20)     NOT NULL                COMMENT '비밀번호', 
    `u_name`       VARCHAR(20)     NOT NULL                COMMENT '이름', 
    `u_profileimg` VARCHAR(200)                            COMMENT '프로필  이미지', 
    `u_money`      INT			     NOT NULL    DEFAULT 0	  COMMENT '보유금금액', 
    `u_isAdmin`    CHAR(1)         NOT NULL    DEFAULT 'F' COMMENT '관리자여부',
    PRIMARY KEY (u_id)
);


CREATE TABLE t3_categories
(
    `c_id`          INT             NOT NULL    COMMENT '카테고리 번호', 
    `c_name`        VARCHAR(30)     NOT NULL    COMMENT '카테고리 이름',
    `c_categoryimg` VARCHAR(200)    NOT NULL    COMMENT '카테고리  이미지', 
    PRIMARY KEY (c_id)
);


CREATE TABLE t3_detailpage
(
    `d_pageno`       INT    AUTO_INCREMENT NOT NULL    COMMENT '페이지번호', 
    `d_title`        VARCHAR(20)           NOT NULL    COMMENT '상품명', 
    `u_id`           VARCHAR(50)           NOT NULL    COMMENT '작성자 이메일(계정)',  
    `c_id`           INT                   NOT NULL    COMMENT '상품 카테고리 ID', 
    `d_goalmoney`    INT                   NOT NULL    COMMENT '목표금액', 
    `d_currentmoney` INT                   NOT NULL    COMMENT '현재금액', 
    `d_content`      blob                  NOT NULL    COMMENT '상품내용', 
    `d_detailimg`    VARCHAR(200)          NOT NULL    COMMENT '상세 이미지', 
    `d_thumbnailimg` VARCHAR(200)          NOT NULL    COMMENT '썸네일 이미지', 
    `d_likeCount`    INT                   NOT NULL    COMMENT '좋아요', 
    `d_commentCount` INT                   NOT NULL    COMMENT '코멘트수', 
    `d_viewCount`    INT                   NOT NULL    COMMENT '조회수', 
    `d_date`         DATE    DEFAULT now() NOT NULL    COMMENT '등록일시', 
    `d_isConfirmed`  CHAR(1) DEFAULT 'F'   NOT NULL    COMMENT '관리자여부',
    PRIMARY KEY (d_pageno),
    FOREIGN KEY (`c_id`) REFERENCES `t3_categories`(`c_id`),
    FOREIGN KEY (`u_id`) REFERENCES `t3_user`(`u_id`)
);



CREATE TABLE t3_investinfo(
    `i_id`           INT            NOT NULL AUTO_INCREMENT    COMMENT '순번', 
    `u_id`           VARCHAR(50)    NOT NULL                   COMMENT '유저아이디', 
    `d_pageno`       INT            NOT NULL                   COMMENT '페이지번호', 
    `i_investmoney`  INT			   NOT NULL DEFAULT 0		   COMMENT '투자금액', 
    PRIMARY KEY (i_id),
    FOREIGN KEY (`u_id`) REFERENCES `t3_user`(`u_id`),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
);

CREATE TABLE t3_detailpage_hashtags(
    `h_id`            INT        AUTO_INCREMENT              COMMENT '순번' ,
    `d_pageno`        INT                        NOT NULL    COMMENT '페이지번호', 
    `hashtag`         VARCHAR(20)                NOT NULL    COMMENT '해쉬태그', 
    PRIMARY KEY (h_id),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
);



CREATE TABLE t3_comment
(
    `c_no`             INT                         NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `d_pageno`         INT                         NOT NULL                   COMMENT '페이지번호', 
    `c_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자', 
    `c_pw`             VARCHAR(20)                 NOT NULL                   COMMENT '코멘트 비밀번호', 
    `c_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용', 
    `c_date`           DATETIME      DEFAULT now() NOT NULL                   COMMENT '작성일시', 
    PRIMARY KEY (c_no),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
); 



CREATE TABLE t3_reply
(
    `r_no`             INT           AUTO_INCREMENT NOT NULL                   COMMENT '게시글번호',
    `c_no`             INT                          NOT NULL                   COMMENT '게시글번호', 
    `r_writer`         VARCHAR(20)                  NOT NULL                   COMMENT '작성자', 
    `r_pw`             VARCHAR(20)                  NOT NULL                   COMMENT '답글 비밀번호',  
    `r_content`        VARCHAR(4000)                NOT NULL                   COMMENT '내용', 
    `r_date`           DATETIME      DEFAULT now()  NOT NULL                   COMMENT '작성일시', 
    PRIMARY KEY (r_no),
	 FOREIGN KEY (`c_no`) REFERENCES `t3_comment`(`c_no`)
); 

	 
