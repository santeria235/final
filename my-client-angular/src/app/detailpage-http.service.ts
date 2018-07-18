import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { DetailPage } from './section/detailpage';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Category } from './service/category-http.service';
@Injectable({
  providedIn: 'root'
})
export class DetailpageHttpService {

  likeMap = new Map(); // 좋아요 누를때 디테일페이지 객체마다 눌렀는지 말았는지 정보 저장

  constructor(private http: Http,
              ) { }


  findAll() {
    return this.http.get("http://localhost:8080/detailpages").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  findRecommendedDetailPage() {
    return this.http.get("http://localhost:8080/detailpages/recommended").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  findByCategoryId(category : Category) {
    return this.http.get("http://localhost:8080/detailpages/category/"+category.c_id).pipe(
      map(res => {
        console.log(res);
        return res.json();
      })
    );
  }

  findPageByPageNo(pageno) {
    return this.http.get("http://localhost:8080/detailpages/"+pageno).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  findWriterByUserId(detailpage : DetailPage) {
    return this.http.get("http://localhost:8080/detailpages/user/"+detailpage.u_id).pipe(
      map(res => {
        console.log('-----------' + res.json());
        return res.json();
      })
    );
  }

  postDetailpage(detailpage) {
    return this.http.post("http://localhost:8080/detailpages/write", detailpage);
  }


  incremnetLikeCount(detailPage : DetailPage) {
    return this.http.post("http://localhost:8080/detailpages/like",detailPage).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  decremnetLikeCount(detailPage : DetailPage) {
    return this.http.post("http://localhost:8080/detailpages/dislike",detailPage).pipe(
      map(res => {
        return res.json();
      })
    );
  }


  incrementViewCount(detailPage : DetailPage) {
    return this.http.put("http://localhost:8080/detailpages/view",JSON.stringify(detailPage));
  }

  setlikeMap(d_pageno, bool : boolean) {
    this.likeMap.set(d_pageno, bool = false);

  }

  getLikeMap(d_pageno) : boolean {
    return this.likeMap.get(d_pageno);
  }

}
