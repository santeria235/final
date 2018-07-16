import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { DetailPage } from './section/detailpage';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailpageHttpService {

  constructor(private http: HttpClient,
              ) { }

  //
  // findAll() {
  //   return this.http.get("http://localhost:8080/detailpages").pipe(
  //     map(res => {
  //       return res.json();
  //     })
  //   );
  // }
  //
  // findPageByPageNo(pageno) {
  //   return this.http.get("http://localhost:8080/detailpages/"+pageno).pipe(
  //     map(res => {
  //       return res.json();
  //     })
  //   );
  // }

  findAll() {
    return this.http.get("http://localhost:8080/detailpages");
  }

  findPageByPageNo(pageno) {
    return this.http.get("http://localhost:8080/detailpages/"+pageno);
  }

  incremnetLikeCount(detailPage : DetailPage) {
    return this.http.put("http://localhost:8080/detailpages/like",detailPage);
  }

  // incremnetViewCount(detailPage : DetailPage) {
  //   return this.http.put("http://localhost:8080/detailpages/view",JSON.stringify(detailPage));
  // }


}
