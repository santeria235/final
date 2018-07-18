import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Comment } from '../joonja/comment/comment';
import { Reply } from '../joonja/comment/reply';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: Http) { }
  comments : Comment[];
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
    return this.http.post("http://localhost:8080/comment/write", comment);
  }

  postReply(reply) {
    return this.http.post("http://localhost:8080/comment/writeReply", reply);
  }

  deleteComment(comment) {
    return this.http.post("http://localhost:8080/comment/delete", comment);
  }

  deleteReply(reply) {
    return this.http.post("http://localhost:8080/comment/reply/delete", reply);
  }


}
