import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Comment } from '../joonja/comment/comment';
import { Reply } from '../joonja/comment/reply';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvestService {

  constructor(private http: Http) { }

  investItem(investInfo) {
    return this.http.post("http://localhost:8080/investInfo/invest", investInfo);
  }
}
