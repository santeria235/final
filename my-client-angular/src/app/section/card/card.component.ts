import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../detailpage';
import { CommentService } from '../../service/comment.service';
import { DetailpageHttpService } from '../../detailpage-http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') card : DetailPage;
  commentCount : number = 0;

  currentPageNo; // 좋아요 누른 객체가 바꼈는지 안바꼈는지 확인용 (디테일페이지의 d_pageno)
  isLikeChecked : boolean = false;

  constructor(private commentService : CommentService,
              private detailPageHttpService : DetailpageHttpService) { }

  ngOnInit() {

  }

  incrementLikeCount(pageNo) {
    this.currentPageNo = pageNo;
    if (this.currentPageNo === pageNo) {
      this.upOrDownLike();
    } else {
      this.isLikeChecked = false;
      this.upOrDownLike();
    }

  }

  upOrDownLike() {
    if(!this.isLikeChecked) {
      this.detailPageHttpService.incremnetLikeCount(this.card).subscribe(res => {
        this.card = res;
       this.isLikeChecked = !this.isLikeChecked;
        });
    } else {
      this.detailPageHttpService.decremnetLikeCount(this.card).subscribe(res => {
        this.card = res;
        this.isLikeChecked = !this.isLikeChecked;
        });
    }
  }
}
