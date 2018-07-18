import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { DetailpageHttpService } from '../../detailpage-http.service';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from '../../service/comment.service';
import { AuthService } from '../../service/auth.service';
import { Comment } from '../comment/comment';
import { Reply } from '../comment/reply';
import { User } from '../../signin/user';


@Component({
  selector: 'app-postarea',
  templateUrl: './postarea.component.html',
  styleUrls: ['./postarea.component.css']
})

@Injectable()
export class PostareaComponent implements OnInit {
  loggedInUser : User;
  fundToggle : boolean = false;
  detailPage: DetailPage;
  comments : Comment[];
  writer : User;
  isLikeChecked : boolean = false;
  tmp;
  @Input('pageNo') pageNo: number;



  constructor(private detailPageHttpService: DetailpageHttpService,
              private commentService : CommentService,
              private authService : AuthService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.getDetailPage();
    this.loggedInUser = this.authService.getLoggedInUser();

  }

  getDetailPage() {
    this.detailPageHttpService.findPageByPageNo(this.pageNo).subscribe(res => {
      this.detailPage = res;
      this.getWriter().subscribe(res => {
        this.writer = res;
      });
        const elem: HTMLElement = document.getElementById('progressbar');
        this.renderer.setStyle(elem, 'width', (this.detailPage.d_currentmoney/this.detailPage.d_goalmoney)*100 + '%');
    });
  }

  getWriter() {
    return this.detailPageHttpService.findWriterByUserId(this.detailPage);
  }

  fundingToggle() {
    if (this.loggedInUser==null) {
      alert("로그인 하셔야 이용할 수 있습니다");
    } else {
      this.fundToggle = !this.fundToggle;
    }
  }

  incrementLikeCount() {
    if(!this.isLikeChecked) {
      this.detailPageHttpService.incremnetLikeCount(this.detailPage).subscribe(res => {
        this.detailPage = res;
        this.isLikeChecked = !this.isLikeChecked;
        });
    } else {
      this.detailPageHttpService.decremnetLikeCount(this.detailPage).subscribe(res => {
        this.detailPage = res;
        this.isLikeChecked = !this.isLikeChecked;
        });
    }
  }

}
