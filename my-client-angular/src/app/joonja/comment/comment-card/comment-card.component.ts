import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../service/comment.service';
import { AuthService } from '../../../service/auth.service';
import { Comment } from '../comment';
import { Reply } from '../reply';
import { User } from '../../../signin/user';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input('comment') comment : Comment;
  replies : Reply[];
  replyToggle : boolean = false;
  replyForPost : Reply = new Reply();
  loggedInUser;
  constructor(private commentService : CommentService,
              private authService : AuthService) { }

  ngOnInit() {
    this.getReplies(this.comment.c_no);

    this.loggedInUser = this.authService.getLoggedInUser();
    // this.loggedInUser = JSON.parse(this.loggedInUser._body);
  }

  setReplyForPost() {
    if (this.authService.isLoggedIn()) {
        this.replyForPost.r_writer = this.loggedInUser.u_name;
        this.replyForPost.r_writer_email = this.loggedInUser.u_id;
    }
  }
  getReplies(commentNo) {
    this.commentService.getReplies(commentNo).subscribe(res => {
      this.replies = res;
    });
  }

  clickReply() {
    this.replyToggle = !this.replyToggle;
  }

  postReply() {
    this.setReplyForPost();
    this.replyForPost.c_no = this.comment.c_no;
    this.commentService.postReply(this.replyForPost)
    .subscribe(() => {
      alert("답글이 등록되었습니다.");
      this.replyToggle = !this.replyToggle;
      this.getReplies(this.comment.c_no);
      });
  }
}
