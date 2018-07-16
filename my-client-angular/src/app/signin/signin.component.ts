import { Component, OnInit, HostListener, Input} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './user';
import { ViewChild, ElementRef } from '@angular/core';
import { Http} from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, EmailValidator,FormBuilder } from "@angular/forms";
import { HttpClientModule,HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

})
export class SigninComponent implements OnInit {
  // 로그인용 유저객체
  loginUser = new User();

  // 회원가입용 유저객체
  user: User = new User();

  // 비밀번호 확인용
  confirmPW: String;

  // 뷰의 모달객체
  @ViewChild('loginModal') loginModal: ElementRef;
  constructor(private userService: UserService,
              private http : Http,
              private router : Router,
              private tokenService : TokenService,
              private authService : AuthService) { }

  ngOnInit() {
  }

  // @HostListener('click')
  //   click() {
  //     this.userService.loginToggle();
  //   }

  login() {
    // this.admin.a_id =this.login1.uid;
    // this.admin.a_pw =this.login1.upw;
    console.log("SigninComponent #login() called.")
    this.userService.getUsers(this.loginUser)
    .subscribe((user : User) => {
        if(user==null){
          alert("아이디 또는 비밀번호를 확인해주세요.");
          // this.router.navigate(["index/login"]);
          // this.user = new User;
          return false;
        }
        alert("로그인 되었습니다.");
        this.userService.loginUser=user;

        // 모달닫기
        this.loginModal.nativeElement.click();

        // authService 토큰부여(세션유지)
        if(this.userService.loginUser!=null){
          this.authService.saveUserToken();
          this.router.navigate(['']);
        }
      },(err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert("Client-side error occured.");
        } else {
          alert("Server-side error occured.");
        }
      });
    }

  registerUser() {
    if (this.confirmPW === this.user.u_pw) {
      this.userService.registerUser(this.user)
      .subscribe(() => {
        alert("회원가입이 완료되었습니다.");
        this.loginModal.nativeElement.click();
      });
    } else {
      alert("비밀번호를 확인해주세요.");
    }



  }


}
