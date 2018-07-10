import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../service/comment.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments : Comment[];
  @Input('pageNo') pageNo : number;
  constructor(private commentService : CommentService) { }

  ngOnInit() {
    console.log(this.pageNo);
    this.commentService.getComments(this.pageNo).subscribe(res => {
      this.comments = res;
    });
  }


}
