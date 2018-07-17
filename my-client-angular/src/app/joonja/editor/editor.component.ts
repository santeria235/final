import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { CategoryHttpService, Category } from '../../service/category-http.service';
import { AuthService } from '../../service/auth.service';
import { User } from '../../signin/user';
import { DetailpageHttpService } from '../../detailpage-http.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  // d_pageno : number;
  // d_title : string;
  // u_id : string;
  // c_id : number;
  // d_goalmoney : number;
  // d_currentmoney : number;
  // d_content : string;
  // d_detialimg : string;
  // d_thumbnailimg : string;
  // d_hashtags : string;
  // d_likeCount : number;
  // d_commentCount : number;
  // d_viewCount : number;
  // d_date : Date;
  // d_isConfirmed : string;
  detailPageForPost : DetailPage = new DetailPage();
  public categories : Category[];
  hashtags : string
  loggedInUser : User;

  constructor(private categoryHttpService : CategoryHttpService,
              private authService : AuthService,
              private detailpageHttpService : DetailpageHttpService) { }

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });

    this.loggedInUser = this.authService.getLoggedInUser();
    this.detailPageForPost.u_id = this.loggedInUser.u_id;
  }

  getCategoryId(category : Category) {
    this.detailPageForPost.c_id = category.c_id;
  }

  InitializeDetailpage() {
    this.detailPageForPost.d_currentmoney = 0;
    this.detailPageForPost.d_detailimg = 'tmp url';
    this.detailPageForPost.d_thumbnailimg = 'tmp url';
    this.detailPageForPost.d_likeCount = 0;
    this.detailPageForPost.d_viewCount = 0;
    this.detailPageForPost.d_commentCount = 0;
    this.detailPageForPost.d_date = new Date();
    this.detailPageForPost.d_isConfirmed = 'T';
  }

  postDetailpage() {
    console.log('----- EditorComponent #postDetailpage() called -----');
    this.InitializeDetailpage();
    this.detailpageHttpService.postDetailpage(this.detailPageForPost)
    .subscribe(() => {
      alert("상품등록이 완료되었습니다. 관리자 승인 후에 메인페이지에 게시됩니다.");
      console.log(this.detailPageForPost);
      // this.getComments(this.pageNo);
    });
  }
}
