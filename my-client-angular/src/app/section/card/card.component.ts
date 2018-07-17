import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../detailpage';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') card : DetailPage;
  commentCount : number = 0;
  constructor(private commentService : CommentService) { }

  ngOnInit() {

  }

}
