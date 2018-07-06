package com.example.t3.detailpage.repository;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.t3.detailpage.model.DetailPage;


@Mapper
public interface DetailPageMapper {
	
    public String INSERT_DETAIL_PAGE = "INSERT into detailpage(dp_pageno,dp_title,u_name,dp_category,"
    		+ "dp_goalmoney,dp_currentmoney,dp_content,dp_img,dp_hashtags,dp_likeCount,dp_commentCount,dp_viewCount,dp_date) "
    		+ "VALUES(#{dp_pageno}, #{dp_title},#{u_name},#{dp_category},#{dp_goalmoney},#{dp_currentmoney},"
    		+ "#{dp_content},#{dp_img},#{dp_hashtags},#{dp_likeCount},#{dp_commentCount},#{dp_viewCount},#{dp_date})";
    
    public String SELECT_PAGE_BY_PAGENO = "SELECT * FROM detailpage WHERE dp_pageno=#{pageno}";
    
	@Insert(INSERT_DETAIL_PAGE)
	public int insert(DetailPage detailPage);
	
//	public int update(DetailPage detailPage);
//	public int delete(int p_code);
//	
	@Select("SELECT COUNT(*) FROM detailpage")
	public int count();
	
	@Select("SELECT * FROM detailpage")
	public List<DetailPage> selectAll();
	
	@Select(SELECT_PAGE_BY_PAGENO)
	public DetailPage selectByPageNo(int pageno);
//	public List<Board> selectByLimit(@Param("page") int page, @Param("size") int size);
//	public int increment(long id);
}
