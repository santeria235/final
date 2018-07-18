package com.example.t3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.t3.investInfo.model.InvestInfo;
import com.example.t3.investInfo.repository.InvestInfoMapper;
import com.example.t3.investInfo.service.InvestInfoService;


@RestController
@RequestMapping("/investInfo")
@CrossOrigin(origins = "http://localhost:4200") 
public class InvestInfoController {
	
	@Autowired
	private InvestInfoMapper investInfoMapper;
	
	@Autowired
	private InvestInfoService investInfoService;
	
	@PostMapping(value = "/invest")
	public void investItem(@RequestBody InvestInfo investInfo) {
		System.out.println("InvestInfoController #investItem() called.");

		investInfoService.insertIntoTables(investInfo);



	}
	
//	@GetMapping(value = "/{d_pageno}")
//	@ResponseBody
//	public List<Comment> getComments(@PathVariable int d_pageno) {
//		List<Comment> comments = commentMapper.getComments(d_pageno);
//		return comments;
//	}
//	
//	@GetMapping(value = "/replies/{c_no}")
//	@ResponseBody
//	public List<Reply> getReplies(@PathVariable int c_no) {
//		List<Reply> replies = commentMapper.getReplies(c_no);
//		return replies;
//	}
//	
	
	
	
//	@PostMapping(value = "/writeReply")
//	public void insertReply(@RequestBody Reply reply) {
//		System.out.println("CommentController #insertReply() called.");
//		commentMapper.postReply(reply);
//		commentMapper.incrementCommentCountByReply(reply);
//	}
//	
//	@PostMapping("/delete")
//	public void deleteComment(@RequestBody Comment comment) {
//		System.out.println("CommentController #deleteComment() called.");
//
//		List<Reply> childReplies = getReplies(comment.getC_no());
//		for (Reply reply : childReplies) {
//			deleteReply(reply);
//		}
//		commentMapper.deleteComment(comment);
//		commentMapper.decrementCommentCountByComment(comment);
//		
//	}
//	
//	@PostMapping("/reply/delete")
//	public void deleteReply(@RequestBody Reply reply) {
//		System.out.println("CommentController #deleteReply() called.");
//		commentMapper.deleteReply(reply);
//		commentMapper.decrementCommentCount(reply);
//	}
//	
	
}