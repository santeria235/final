import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { Comment } from './comment';
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
  constructor(private commentService : CommentService) { }

  ngOnInit() {
    this.getComments(this.pageNo);
    this.commentForPost.d_pageno=this.pageNo;
  }

  getComments(pageNo) {
    this.commentService.getComments(pageNo).subscribe(res => {
      this.comments = res;
      this.commentsCount = this.comments.length;
    });
  }

  postComment() {
    console.log('----- post-component #postComment() called -----');
    this.commentService.postComment(this.commentForPost)
    .subscribe(() => {
      alert("댓글이 등록되었습니다.");
      console.log(this.commentForPost);
      this.getComments(this.pageNo);
    });
  }



}
