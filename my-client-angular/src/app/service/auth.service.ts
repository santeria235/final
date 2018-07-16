import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { log } from "util";
import { Buffer } from "buffer";
import { User } from '../signin/user';
import { UserService } from "./user.service";
import { HttpClient } from '@angular/common/http';
import { TokenService } from "./token.service";

@Injectable()
export class AuthService {
  private users: Observable<User[]>;
  usersList: User[] = [];

  constructor(
    private userService: UserService,
    private tokenService:TokenService
  ) {}

  saveUserToken(){
    const objStr = JSON.stringify(this.userService.loginUser);
    const token = new Buffer(objStr).toString("base64");
    localStorage.setItem("loginToken", token);
    sessionStorage.setItem("loginToken", token);
  }

  updateUserToken(user:User){
    localStorage.removeItem("loginToken");
    sessionStorage.removeItem("loginToken");
    const objStr = JSON.stringify(user);
    const token = new Buffer(objStr).toString("base64");
    localStorage.setItem("loginToken", token);
    sessionStorage.setItem("loginToken", token);
  }


  loginCheck(id: string, password: string): boolean {
    console.log("id", id);
    console.log("password", password);

    let status = false;
    for (const el of this.usersList) {
      console.log(el);
      if (id === el.u_id && password === el.u_pw) {
        const loggedInUser = el;
        const objStr = JSON.stringify(loggedInUser);
        const token = new Buffer(objStr).toString("base64");
        localStorage.setItem("loginToken", token);
        sessionStorage.setItem("loginToken", token);
        status = true;
        break;
      }
    }

    return status;
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  isLoggedIn(): Boolean {
    const token = sessionStorage.getItem("loginToken");
    if (token) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const token = sessionStorage.getItem("adminToken");

    if (token) {
      return true;
    }
    return false;
  }

  getLoggedInUser(): User {
    const token = sessionStorage.getItem("loginToken");

    if (!token) {
      return null;
    }

    const strObj = new Buffer(token || "", "base64").toString("utf8");
    let loggedUser: User = JSON.parse(strObj);
    return loggedUser;
  }
}
