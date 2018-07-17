
SET foreign_key_checks = 0;
DROP table t3_user;
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

drop table t3_investinfo;
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

drop table t3_categories;
CREATE TABLE t3_categories
(
    `c_id`          INT             NOT NULL    COMMENT '카테고리 번호', 
    `c_name`        VARCHAR(30)     NOT NULL    COMMENT '카테고리 이름',
    `c_categoryimg` VARCHAR(200)    NOT NULL    COMMENT '카테고리  이미지', 
    PRIMARY KEY (c_id)
);

SET foreign_key_checks = 0;
drop table t3_detailpage;
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
select * from t3_detailpage;
drop table t3_detailpage_comment;

SELECT * FROM t3_comment WHERE (SELECT c_no FROM t3_detailpage_comment dc WHERE dc.d_pageno = 1) = t3_comment.c_no;

select c.c_no, c.c_writer, c.c_writer_email, c.c_content, c.c_date FROM(
select a.d_pageno, a.c_no, b.c_writer, b.c_writer_email, b.c_content, b.c_date
from t3_detailpage_comment a, t3_comment b 
where a.c_no=b.c_no
) c
where c.d_pageno = 1;




SET foreign_key_checks = 0;
drop table t3_comment;

SET foreign_key_checks = 0;
drop table t3_reply;

CREATE TABLE t3_comment
(
    `c_no`             INT                         NOT NULL    AUTO_INCREMENT COMMENT '게시글번호', 
    `d_pageno`         INT                         NOT NULL                   COMMENT '페이지번호', 
    `c_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자', 
    `c_writer_email`   VARCHAR(200)                NOT NULL                   COMMENT '작성자 이메일', 
    `c_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용', 
    `c_date`           DATETIME      DEFAULT now() NOT NULL                   COMMENT '작성일시', 
    PRIMARY KEY (c_no),
    FOREIGN KEY (`d_pageno`) REFERENCES `t3_detailpage`(`d_pageno`)
); 


Insert into t3_comment Values(0,1,"이상오","santeria235@gmail.com","안녕안녕",now());
Insert into t3_comment Values(0,1,"레골라스","santeria235@gmail.com","안녕안녕",now());
Insert into t3_comment Values(0,2,"김리","santeria235@gmail.com","안녕안녕",now());
Insert into t3_comment Values(0,2,"간달프","santeria235@gmail.com","안녕안녕",now());
Insert into t3_comment Values(0,2,"프로도","santeria235@gmail.com","안녕안녕",now());
select * from t3_comment;
delete * from t3_comment;

Insert into t3_reply Values(1,"이상오","santeria235@gmail.com","안녕안녕",now());
Insert into t3_reply Values(1,"레골라스","santeria235@gmail.com","안녕안녕",now());
Insert into t3_reply Values(2,"김리","santeria235@gmail.com","안녕안녕",now());
Insert into t3_reply Values(2,"간달프","santeria235@gmail.com","안녕안녕",now());
Insert into t3_reply Values(2,"프로도","santeria235@gmail.com","안녕안녕",now());

SET foreign_key_checks = 0;
drop table t3_comment;
select * from t3_reply;
SET foreign_key_checks = 0;
drop table t3_reply;
CREATE TABLE t3_reply
(
    `c_no`             INT                         NOT NULL                   COMMENT '게시글번호', 
    `r_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자', 
    `r_writer_email`   VARCHAR(200)                NOT NULL                   COMMENT '작성자 이메일', 
    `r_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용', 
    `r_date`           DATETIME      DEFAULT now() NOT NULL                   COMMENT '작성일시', 
	 FOREIGN KEY (`c_no`) REFERENCES `t3_comment`(`c_no`)
); 

select * from t3_reply;

Insert into Table t3_detailpage(`d_pageno`,d_title`,`u_id`,`c_id`,`d_goalmoney`,`d_currentmoney`  
    `d_content`,`d_img`,`d_likeCount`,`d_commentCount`,`d_viewCount`,`d_date`)
	 Values(Data1, Data2, Data3...)
	 
select * from t3_categories;
drop table t3_categories;
Insert into t3_categories Values('100','ART','http://localhost:8080/assets/categoryimage/art.jpg');
Insert into t3_categories Values('200','COMICS','http://localhost:8080/assets/categoryimage/comics.jpg');
Insert into t3_categories Values('300','CRAFTS','http://localhost:8080/assets/categoryimage/crafts.jpg');
Insert into t3_categories Values('400','DANCE','http://localhost:8080/assets/categoryimage/dance.jpg');
Insert into t3_categories Values('500','DESIGN','http://localhost:8080/assets/categoryimage/design.jpg');
Insert into t3_categories Values('600','FASHION','http://localhost:8080/assets/categoryimage/fashion.jpg');
Insert into t3_categories Values('700','FILM & VIDEO','http://localhost:8080/assets/categoryimage/filmvideo.jpg');
Insert into t3_categories Values('800','FOOD','http://localhost:8080/assets/categoryimage/Food.jpg');
Insert into t3_categories Values('900','GAMES','http://localhost:8080/assets/categoryimage/games.png');
Insert into t3_categories Values('1000','JOURNALISM','http://localhost:8080/assets/categoryimage/journalism.jpg');
Insert into t3_categories Values('1100','MUSIC','http://localhost:8080/assets/categoryimage/music.jpg');
Insert into t3_categories Values('1200','PHOTOGRAPHY','http://localhost:8080/assets/categoryimage/photography.jpg');
Insert into t3_categories Values('1300','TECHNOLOGY','http://localhost:8080/assets/categoryimage/Techonology.png');


insert into t3_user values('santeria235@gmail.com','1234','이상오','temp','T');

insert into t3_detailpage
values(null, '제목','santeria235@gmail.com',100,30000000,0,
'내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리 내용이 오는 자리',
'이미지url',0,0,0,now());

    
select * from t3_detailpage;