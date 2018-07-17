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
  selectedByCategory : DetailPage[];
  constructor(private http: Http,
              ) { }


  findAll() {
    return this.http.get("http://localhost:8080/detailpages").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  findByCategoryId(category : Category) {
    return this.http.get("http://localhost:8080/detailpages/category/"+category.c_id).pipe(
      map((res : DetailPage[]) => {
        console.log(res);
        this.selectedByCategory = res;
        // return res.json();
      })
    );
  }

  findPageByPageNo(pageno) {
    return this.http.get("http://localhost:8080/detailpages/cate"+pageno).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  postDetailpage(detailpage) {
    return this.http.post("http://localhost:8080/detailpages/write", detailpage);
  }

  incremnetLikeCount(detailPage : DetailPage) {
    return this.http.put("http://localhost:8080/detailpages/like",detailPage);
  }


  // incremnetViewCount(detailPage : DetailPage) {
  //   return this.http.put("http://localhost:8080/detailpages/view",JSON.stringify(detailPage));
  // }


}
