import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DetailpageHttpService {

  constructor(private http: Http) { }

  findAll() {
    return this.http.get("http://localhost:8080/detailpages").pipe(
      map(res => {
        console.log(res);
        return res.json();
      })
    );
  }

  findPageByPageNo(pageno) {
    return this.http.get("http://localhost:8080/detailpages/"+pageno).pipe(
      map(res => {
        console.log(res);
        return res.json();
      })
    );
  }
}