CREATE TABLE t3_user
(
    `u_id`         VARCHAR(50)     NOT NULL    COMMENT '이메일(계정아이디)', 
    `u_pw`         VARCHAR(20)     NOT NULL    COMMENT '비밀번호', 
    `u_name`       VARCHAR(20)     NOT NULL    COMMENT '이름', 
    `u_isAdmin`   CHAR(1)          NOT NULL, 
    PRIMARY KEY (u_id)
);

select * from t3_user;

drop table detailpage;
CREATE TABLE detailpage
(
    `dp_pageno`       INT      NOT NULL    COMMENT '페이지번호', 
    `dp_title`       VARCHAR(20)      NOT NULL    COMMENT '상품명', 
    `u_name`     VARCHAR(20)      NOT NULL    COMMENT '작성자', 
    `dp_category`       VARCHAR(30)      NOT NULL    COMMENT '상품종류', 
    `dp_goalmoney`      INT                   NOT NULL    COMMENT '목표금액', 
    `dp_currentmoney`  INT                   NOT NULL    COMMENT '현재금액', 
    `dp_content`    VARCHAR(4000)    NOT NULL    COMMENT '상품내용', 
    `dp_img`        VARCHAR(200)     NOT NULL    COMMENT '상품이미지', 
    `dp_hashtags`        VARCHAR(400)     NOT NULL    COMMENT '해쉬태그', 
    `dp_likeCount`  INT                   NOT NULL    COMMENT '좋아요', 
    `dp_commentCount`  INT                   NOT NULL    COMMENT '코멘트수', 
    `dp_viewCount`  INT                   NOT NULL    COMMENT '조회수', 
    `dp_date`       DATE                 DEFAULT now() NOT NULL, 
    PRIMARY KEY (dp_pageno)
);

select * from detailpage;


CREATE TABLE tm_faq
(
    `f_no`        INT                   NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `p_code`       VARCHAR(10)      NOT NULL    COMMENT '상품코드', 
    `f_content`   VARCHAR(4000)    NOT NULL    COMMENT '내용', 
    `u_id`        VARCHAR(20)      NOT NULL    COMMENT '작성자', 
    `f_hits`      INT                   NOT NULL    COMMENT '조회수', 
    `f_date`      DATE                  DEFAULT now() NOT NULL COMMENT '작성일', 
    `f_isAnswerd`   CHAR(1)          NOT NULL, 
    PRIMARY KEY (f_no)
);

CREATE TABLE tm_comment
(
    `c_no`        INT                   NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `c_parent`  VARCHAR(20)      NOT NULL    COMMENT '카테고리', 
    `f_title`     VARCHAR(200)     NOT NULL    COMMENT '제목', 
    `f_content`   VARCHAR(4000)    NOT NULL    COMMENT '내용', 
    `u_id`        VARCHAR(20)      NOT NULL    COMMENT '작성자', 
    `f_hits`      INT                   NOT NULL    COMMENT '조회수', 
    `f_date`      DATE                  DEFAULT now() NOT NULL COMMENT '작성일', 
    `f_isAnswerd`   CHAR(1)          NOT NULL, 
    PRIMARY KEY (f_no)
); 