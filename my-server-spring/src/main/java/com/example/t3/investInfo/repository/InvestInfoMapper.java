package com.example.t3.investInfo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.t3.detailpage.model.DetailPage;
import com.example.t3.investInfo.model.InvestInfo;
import com.example.t3.user.model.User;



@Mapper
public interface InvestInfoMapper {
	
//    public String INSERT_DETAIL_PAGE = "INSERT into t3_detailpage "
//            + "VALUES(#{d_pageno}, #{d_title},#{u_id},#{c_id},#{d_goalmoney},#{d_currentmoney},"
//    		+ "#{d_content},#{d_detailimg},#{d_thumbnailimg},#{d_likeCount},#{d_commentCount},#{d_viewCount},#{d_date},#{d_isConfirmed})";
//    
//    public String SELECT_PAGE_BY_PAGENO = "SELECT * FROM t3_detailpage WHERE d_pageno=#{pageno}";
//    
//	@Insert(INSERT_DETAIL_PAGE)
//	public int postDetailpage(DetailPage detailPage);
//	
	public String INSERT_INVEST_INFO = "INSERT INTO t3_investinfo VALUES(#{i_id},#{u_id},#{d_pageno},#{i_investmoney})";
	
	@Insert(INSERT_INVEST_INFO)
	public int investItem(InvestInfo investInfo);

	@Update("UPDATE t3_detailpage SET d_currentmoney=#{i_investmoney} WHERE d_pageno=#{d_pageno}")
	public int updateDetailpageCurrentMoney(InvestInfo investInfo);
	
	@Update("UPDATE t3_user SET u_money=#{i_investmoney} WHERE u_id=#{u_id}")
	public int updateUserMoney(InvestInfo investInfo);
	
//	@Select("SELECT COUNT(*) FROM t3_detailpage order by d_viewCount desc")
//	public int count();
//	
//	@Select("SELECT * FROM t3_detailpage")
//	public List<DetailPage> selectAll();
//	
//	@Select("SELECT * FROM t3_detailpage order by d_viewCount desc limit 3")
//	public List<DetailPage> getRecommendedDetailPages();
//	
//	@Select("SELECT * FROM t3_user where u_id=#{u_id}")
//	public User getUserByUserId(String u_id);
//	
//	@Select("SELECT * FROM t3_detailpage where c_id=#{c_id}")
//	public List<DetailPage> selectByCategoryId(int c_id);
//	
//	
//	@Select(SELECT_PAGE_BY_PAGENO)
//	public DetailPage selectByPageNo(int pageno);
//
//	
//	@Update("UPDATE t3_detailpage SET d_likeCount=d_likeCount+1 WHERE d_pageno=#{d_pageno}")
//	public int incrementLikeCount(DetailPage detailPage);	
//	
//	@Update("UPDATE t3_detailpage SET d_viewCount=d_viewCount+1 WHERE d_pageno=#{d_pageno}")
//	public int incrementViewCount(int d_pageno);
//	public List<Board> selectByLimit(@Param("page") int page, @Param("size") int size);
//	public int increment(long id);

	

	
}