import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../service/comment.service';
import { Comment } from '../comment';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
@Input('comment') comment : Comment;
  replies : Comment[];
  constructor(private commentService : CommentService) { }

  ngOnInit() {
    this.getReplies(this.comment.c_no);
  }

  getReplies(commentNo) {
    this.commentService.getReplies(commentNo).subscribe(res => {
      this.replies = res;
    });
  }
}
