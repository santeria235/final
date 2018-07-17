import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { DetailpageHttpService } from '../../detailpage-http.service';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from '../../service/comment.service';
import { Comment } from '../comment/comment';
import { Reply } from '../comment/reply';


@Component({
  selector: 'app-postarea',
  templateUrl: './postarea.component.html',
  styleUrls: ['./postarea.component.css']
})

@Injectable()
export class PostareaComponent implements OnInit {
  detailPage: DetailPage;
  comments : Comment[];
  commentCount : number = 0;
  tmp;
  @Input('pageNo') pageNo: number;

  constructor(private detailPageHttpService: DetailpageHttpService,
              private commentService : CommentService) { }

  ngOnInit() {
    this.getDetailPage();
    // this.incrementViewCount();

    // 코멘트수구하기
  }

  getDetailPage() {
    this.detailPageHttpService.findPageByPageNo(this.pageNo).subscribe(res => {
      this.detailPage = res;
    });
  }


  // incrementLikeCount() {
  //   this.detailpageHttpService.incremnetLikeCount(this.pageNo).subscribe(() => {
  //     this.getDetailPage();
  //
  //   });
  // }

  // incrementViewCount() {
  //    this.detailPageHttpService.incremnetViewCount(this.detailPage).subscribe(res => {
  //      alert("incremnet View COunt")
  //    });
  // }

}
