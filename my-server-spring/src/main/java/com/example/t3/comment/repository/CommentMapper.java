package com.example.t3.comment.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.example.t3.comment.model.Comment;



@Mapper
public interface CommentMapper {
	
    public String INSERT_DETAIL_PAGE = "INSERT into t3_detailpage(d_pageno,d_title,u_id,c_id,"
    		+ "d_goalmoney,d_currentmoney,d_content,d_img,d_likeCount,d_commentCount,d_viewCount,d_date) "
    		+ "VALUES(#{d_pageno}, #{d_title},#{u_id},#{c_id},#{d_goalmoney},#{d_currentmoney},"
    		+ "#{d_content},#{d_img},#{d_likeCount},#{d_commentCount},#{d_viewCount},#{d_date})";
    
    public String POST_COMMENT = "INSERT INTO t3_comment VALUES(#{c_no},#{d_pageno},#{c_writer},#{c_writer_email},#{c_content},#{c_date})";
    public String SELECT_PAGE_BY_PAGENO = "SELECT * FROM t3_detailpage WHERE d_pageno=#{pageno}";
    public String GET_COMMENTS = "select * from t3_comment where d_pageno=#{d_pageno}";
    
    public String POST_DETAILPAGE_COMMENT = "INSERT INTO t3_detailpage_comment VALUES(0,#{d_pageno},#{c_no})";
    
    public String GET_REPLIES = "select * from t3_reply where c_no=#{c_no}";
    
	@Insert(POST_COMMENT)
	public int postComment(Comment comment);
	
	@Insert(POST_DETAILPAGE_COMMENT)
	public int postDetailpageComment(int d_pageno, int c_no);
	
	@Select(GET_COMMENTS)
	public List<Comment> getComments(int d_pageno);
	
	@Results({
        @Result(property = "c_no", column = "c_no"),
        @Result(property = "c_writer", column = "r_writer"),
        @Result(property = "c_writer_email", column = "r_writer_email"),
        @Result(property = "c_content", column = "r_content"),
        @Result(property = "c_date", column = "r_date")
	})
	@Select(GET_REPLIES)
	public List<Comment> getReplies(int c_no);
	 
//	public int update(DetailPage detailPage);
//	public int delete(int p_code);
//	
//	@Select("SELECT COUNT(*) FROM t3_detailpage")
//	public int count();
//	
	
//	
//	@Select(SELECT_PAGE_BY_PAGENO)
//	public DetailPage selectByPageNo(int pageno);
//
//	@Update("UPDATE t3_detailpage SET d_likeCount=d_likeCount+1 WHERE d_pageno=#{d_pageno}")
//	public int incrementLikeCount(int d_pageno);	
//	public List<Board> selectByLimit(@Param("page") int page, @Param("size") int size);
//	public int increment(long id);
}
