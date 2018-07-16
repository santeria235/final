import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../signin/user';
import { HttpClientModule,HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser: User;

  constructor(private http: HttpClient) {
    this.loginUser=new User();
  }

  registerUser(user) {
    return this.http.post("http://localhost:8080/user/register", user);
  }

  // 로그인
  getUsers(user: User) {
    return this.http.post("http://localhost:8080/user/login", user);
  }


}
