import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: Http) { }

  getComments(pageno) {
    return this.http.get("http://localhost:8080/comment/"+pageno).pipe(
      map(res => {
        console.log(res);
        return res.json();
      })
    );
  }
}
