export class Comment {
//   `c_no`             INT                         NOT NULL    AUTO_INCREMENT COMMENT '게시글번호',
// `c_writer`         VARCHAR(20)                 NOT NULL                   COMMENT '작성자',
// `c_writer_email`   VARCHAR(200)                NOT NULL                   COMMENT '작성자 이메일',
// `c_content`        VARCHAR(4000)               NOT NULL                   COMMENT '내용',
// `c_date`           DATE          DEFAULT now() NOT NULL                   COMMENT '작성일시',

  c_no : number;
  c_writer : string;
  c_writer_email : string;
  c_content : string;
  c_date : string;

}
