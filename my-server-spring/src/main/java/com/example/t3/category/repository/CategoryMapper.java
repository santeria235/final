package com.example.t3.category.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.t3.category.model.Category;


@Mapper
public interface CategoryMapper {
	
	@Select("SELECT COUNT(*) FROM t3_categories")
	public int count();
	
	@Select("SELECT * FROM t3_categories")
	public List<Category> selectAll();
	
//	@Select(SELECT_PAGE_BY_PAGENO)
//	public DetailPage selectByPageNo(int pageno);
//	public List<Board> selectByLimit(@Param("page") int page, @Param("size") int size);
//	public int increment(long id);
}
