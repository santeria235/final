package com.example.t3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.t3.comment.model.Comment;
import com.example.t3.comment.model.Reply;
import com.example.t3.comment.repository.CommentMapper;


@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:4200") 
public class CommentController {
	
	int c_no;
	
	@Autowired
	private CommentMapper commentMapper;
	
	@GetMapping(value = "/{d_pageno}")
	@ResponseBody
	public List<Comment> getComments(@PathVariable int d_pageno) {
		List<Comment> comments = commentMapper.getComments(d_pageno);
		return comments;
	}
	
	@GetMapping(value = "/replies/{c_no}")
	@ResponseBody
	public List<Reply> getReplies(@PathVariable int c_no) {
		List<Reply> replies = commentMapper.getReplies(c_no);
		return replies;
	}
	
	
	
	@PostMapping(value = "/write")
	public void insertComment(@RequestBody Comment comment) {
		System.out.println("CommentController #inserComment() called.");
		commentMapper.postComment(comment);
		commentMapper.incrementCommentCount(comment);
	}
	
	@PostMapping(value = "/writeReply")
	public void insertReply(@RequestBody Reply reply) {
		System.out.println("CommentController #insertReply() called.");
		commentMapper.postReply(reply);
		commentMapper.incrementCommentCountByReply(reply);
	}
	
	@PostMapping("/delete")
	public void deleteComment(@RequestBody Comment comment) {
		System.out.println("CommentController #deleteComment() called.");

		List<Reply> childReplies = getReplies(comment.getC_no());
		for (Reply reply : childReplies) {
			deleteReply(reply);
		}
		commentMapper.deleteComment(comment);
		commentMapper.decrementCommentCountByComment(comment);
		
	}
	
	@PostMapping("/reply/delete")
	public void deleteReply(@RequestBody Reply reply) {
		System.out.println("CommentController #deleteReply() called.");
		commentMapper.deleteReply(reply);
		commentMapper.decrementCommentCount(reply);
	}
	
	
}