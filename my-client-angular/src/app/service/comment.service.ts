import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Comment } from '../joonja/comment/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: Http) { }

  getComments(pageno) {
    return this.http.get("http://localhost:8080/comment/"+pageno).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  getReplies(commentNo) {
    return this.http.get("http://localhost:8080/comment/replies/"+commentNo).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  postComment(comment) {
    console.log('----- Comment-Service #postComment() called -----');
    console.log(JSON.stringify(comment));
    return this.http.post("http://localhost:8080/comment/write", comment);
  }

 postDetailpageComment(pageno) {
   return this.http.post("http://localhost:8080/comment/writeToDetailpageComment", pageno);
 }
}
