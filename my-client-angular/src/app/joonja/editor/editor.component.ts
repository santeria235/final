import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { CategoryHttpService, Category } from '../../service/category-http.service';
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
  detailPage : DetailPage = new DetailPage();
  public categories : Category[];
  hashtags : string
  constructor(private categoryHttpService : CategoryHttpService) { }

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });
  }

}
