package com.example.t3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.t3.detailpage.model.DetailPage;
import com.example.t3.detailpage.repository.DetailPageMapper;
import com.example.t3.user.model.User;



@RestController
@RequestMapping("/detailpages")
@CrossOrigin(origins = "http://localhost:4200") 
public class DetailPageController {
	@Autowired
	private DetailPageMapper detailPageMapper;
			
	@GetMapping
	@ResponseBody
	public List<DetailPage> getAllDetailPages() {
		List<DetailPage> detailPages = detailPageMapper.selectAll();
		return detailPages;
	}
	
	@GetMapping(value = "/recommended")
	@ResponseBody
	public List<DetailPage> getRecommendedDetailPages() {
		List<DetailPage> detailPages = detailPageMapper.getRecommendedDetailPages();
		return detailPages;
	}
	
	@GetMapping(value = "/{d_pageno}")
	@ResponseBody
	public DetailPage getDetailPage(@PathVariable int d_pageno) {
		DetailPage detailPages = detailPageMapper.selectByPageNo(d_pageno);
		detailPageMapper.incrementViewCount(d_pageno);
		return detailPages;
	}
	
	@GetMapping(value = "/category/{c_id}")
	@ResponseBody
	public List<DetailPage> getDetailPageByCategoryId(@PathVariable int c_id) {
		List<DetailPage> detailPages = detailPageMapper.selectByCategoryId(c_id);
		return detailPages;
	}
	
	@GetMapping(value = "/user/{u_id}")
	@ResponseBody
	public User getUserByUserId(@PathVariable String u_id) {
		System.out.println("getUserByUserId() called.");
		System.out.println("userid:"+u_id);
		User user = detailPageMapper.getUserByUserId(u_id);
		return user;
	}
	
	@PostMapping(value = "/write")
	public void insertDetailpage(@RequestBody DetailPage detailpage) {
		System.out.println("DetailPageController #insertDetailpage() called.");
		detailPageMapper.postDetailpage(detailpage);
	}
	
	@PostMapping(value = "/like")
	public DetailPage incrementLikeCount(@RequestBody DetailPage detailPage) {
		System.out.println("DetailPageController #incrementLikeCount() called.");
		detailPageMapper.incrementLikeCount(detailPage);
		int d_pageno = detailPage.getD_pageno();
		return detailPageMapper.selectByPageNo(d_pageno);
	}
	
	@PostMapping(value = "/dislike")
	public DetailPage decrementLikeCount(@RequestBody DetailPage detailPage) {
		System.out.println("DetailPageController #decrementLikeCount() called.");
		detailPageMapper.decrementLikeCount(detailPage);
		int d_pageno = detailPage.getD_pageno();
		return detailPageMapper.selectByPageNo(d_pageno);
	}
	
	
	

//	
//	@GetMapping("/view/{id}")
//	public ModelAndView getBoardView(@PathVariable long id) {
//		boardMapper.increment(id);
//		ModelAndView mav = new ModelAndView("board_view");
//		mav.addObject("board", boardMapper.selectById(id));
//		return mav;
//	}
//	
//	@GetMapping("/write")
//	public String getInsertView(HttpSession session, Model model) {
//		User user = (User) session.getAttribute("user");
//		if (user == null) {
//			return "redirect:/login";
//		}
//		model.addAttribute("user", user);
//		return "board_write";
//	}
//	
//	@PostMapping("/write")
//	public String postInsert(Board board, HttpSession session, Model model) {
//		User user = (User) session.getAttribute("user");
//		
//		if (user != null && board != null) {
//			if (user.getEmail().equals(board.getWriter())) {
//				boardMapper.insert(board);
//			}
//		}
//		return "redirect:/boards";
//	}
//	
//	@GetMapping("/update/{id}")
//	public String getUpdateView(@PathVariable long id, HttpSession session, Model model) {
//		User user = (User) session.getAttribute("user");
//		Board board = boardMapper.selectById(id);
//		
//		if (user != null && board != null) {
//			if (user.getEmail().equals(board.getWriter())) {
//				model.addAttribute("board", board);
//				return "board_update";
//			}
//		}
//		return "redirect:/boards";
//	}
//	
//	@PostMapping("/update")
//	public String postUpdate(Board board, HttpSession session, Model model) {
//		User user = (User) session.getAttribute("user");
//		
//		if (user != null && board != null) {
//			if (user.getEmail().equals(board.getWriter())) {
//				boardMapper.update(board);
//				return "redirect:/boards/view/" + board.getId();
//			}
//		}
//		return "redirect:/boards";
//	}
//	
//	@GetMapping("/delete/{id}")
//	public String getDelete(@PathVariable long id, HttpSession session, Model model) {
//		User user = (User) session.getAttribute("user");
//		
//		if (user != null) {
//			Board board = boardMapper.selectById(id);
//			
//			if (user.getEmail().equals(board.getWriter())) {
//				boardMapper.delete(id);
//			}
//		}
//		return "redirect:/boards";
//	}
	
}
