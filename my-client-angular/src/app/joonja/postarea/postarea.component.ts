import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { DetailpageHttpService } from '../../detailpage-http.service';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-postarea',
  templateUrl: './postarea.component.html',
  styleUrls: ['./postarea.component.css']
})

@Injectable()
export class PostareaComponent implements OnInit {
  detailPage: DetailPage;
  @Input('pageNo') pageNo: number;

  constructor(private detailPageHttpService: DetailpageHttpService) { }

  ngOnInit() {
    this.getDetailPage();
    // this.incrementViewCount();
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
