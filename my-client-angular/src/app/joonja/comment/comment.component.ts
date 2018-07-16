import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { AuthService } from '../../service/auth.service';
import { Comment } from './comment';
import { User } from '../../signin/user';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments : Comment[];
  commentsCount : number;
  commentForPost = new Comment();
  @Input('pageNo') pageNo : number;
  loggedInUser;

  constructor(private commentService : CommentService,
              private authService : AuthService) { }

  ngOnInit() {
    this.getComments(this.pageNo);
    this.commentForPost.d_pageno=this.pageNo;
    this.loggedInUser = this.authService.getLoggedInUser();
    this.loggedInUser = JSON.parse(this.loggedInUser._body);


    // console.log("------------------------------------------");
    // console.log(this.loggedInUser);
    // console.log("------------------------------------------");
  }

  setCommentForPost() {
    if (this.authService.isLoggedIn()) {
        this.commentForPost.c_writer = this.loggedInUser.u_name;
        this.commentForPost.c_writer_email = this.loggedInUser.u_id;
    }
  }
  getComments(pageNo) {
    this.commentService.getComments(pageNo).subscribe(res => {
      this.comments = res;
      this.commentsCount = this.comments.length;
    });
  }

  postComment() {
    console.log('----- post-component #postComment() called -----');
    this.setCommentForPost();
    this.commentService.postComment(this.commentForPost)
    .subscribe(() => {
      alert("댓글이 등록되었습니다.");
      console.log(this.commentForPost);
      this.getComments(this.pageNo);
    });
  }



}
