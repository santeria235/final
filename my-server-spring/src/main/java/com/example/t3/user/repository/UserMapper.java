package com.example.t3.user.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.example.t3.comment.model.Comment;
import com.example.t3.user.model.User;


@Mapper
public interface UserMapper {
	
	
	    public String REGISTER_USER = "INSERT INTO t3_user VALUES(#{u_id},#{u_pw},#{u_name},#{u_profileImg},#{u_money},#{u_isAdmin})";
	    public String USER_LOGIN_CHECK = "SELECT * FROM t3_user WHERE u_id=#{u_id}";
	    
		@Insert(REGISTER_USER)
		public int registerUser(User user);
		
		@Select(USER_LOGIN_CHECK)
		public User getUserById(String u_id);
		
		@Select(USER_LOGIN_CHECK)
		public User userLoginCheck(User user);
		
//		@Insert(POST_DETAILPAGE_COMMENT)
//		public int postDetailpageComment(int d_pageno, int c_no);
//		
//		@Select(GET_COMMENTS)
//		public List<Comment> getComments(int d_pageno);
//		
//		@Results({
//	        @Result(property = "c_no", column = "c_no"),
//	        @Result(property = "c_writer", column = "r_writer"),
//	        @Result(property = "c_writer_email", column = "r_writer_email"),
//	        @Result(property = "c_content", column = "r_content"),
//	        @Result(property = "c_date", column = "r_date")
//		})
//		@Select(GET_REPLIES)
//		public List<Comment> getReplies(int c_no);
//	@Insert("INSERT INTO user(email, password) VALUES(#{email}, #{password})")
//	public int insert(User user);
//
//	@Update("UPDATE user SET password = #{password} WHERE email = #{email}")
//	public int update(User user);
//
//	@Delete("DELETE FROM user WHERE email = #{email}")
//	public int delete(String email);
//
//	@Select("SELECT COUNT(*) FROM user")
//	public int count();
//
//	@Select("SELECT * FROM user ORDER BY email ASC")
//	// 생략이 가능하다. 생략하면 아래 선언이 있는 것처럼 작동한다.
//	@ResultType(User.class) 
//	public List<User> selectAll();
//
//	@Select("SELECT * FROM user WHERE email = #{email}")
//	// 선언해 놓으면 다른 메소드에서 @ResultMap("userResultMap") 선언으로 이용할 수 있다.
//	@Results(id = "userResultMap", value = { 
//			@Result(property = "email", column = "email"),
//			@Result(property = "password", column = "password") })
//	public User selectByEmail(String email);
}
