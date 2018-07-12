package com.example.t3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.t3.comment.model.Comment;
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
	public List<Comment> getReplies(@PathVariable int c_no) {
		List<Comment> replies = commentMapper.getReplies(c_no);
		return replies;
	}
	
	
	
	@PostMapping(value = "/write")
	public void insertComment(@RequestBody Comment comment) {
		System.out.println("CommentController #inserComment() called.");
		commentMapper.postComment(comment);
		
	}
	
	
}