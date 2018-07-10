package com.example.t3.detailpage.repository;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.t3.detailpage.model.DetailPage;


@Mapper
public interface DetailPageMapper {
	
    public String INSERT_DETAIL_PAGE = "INSERT into t3_detailpage(d_pageno,d_title,u_id,c_id,"
    		+ "d_goalmoney,d_currentmoney,d_content,d_img,d_likeCount,d_commentCount,d_viewCount,d_date) "
    		+ "VALUES(#{d_pageno}, #{d_title},#{u_id},#{c_id},#{d_goalmoney},#{d_currentmoney},"
    		+ "#{d_content},#{d_img},#{d_likeCount},#{d_commentCount},#{d_viewCount},#{d_date})";
    
    public String SELECT_PAGE_BY_PAGENO = "SELECT * FROM t3_detailpage WHERE d_pageno=#{pageno}";
    
	@Insert(INSERT_DETAIL_PAGE)
	public int insert(DetailPage detailPage);
	
//	public int update(DetailPage detailPage);
//	public int delete(int p_code);
//	
	@Select("SELECT COUNT(*) FROM t3_detailpage")
	public int count();
	
	@Select("SELECT * FROM t3_detailpage")
	public List<DetailPage> selectAll();
	
	@Select(SELECT_PAGE_BY_PAGENO)
	public DetailPage selectByPageNo(int pageno);
//	public List<Board> selectByLimit(@Param("page") int page, @Param("size") int size);
//	public int increment(long id);
}