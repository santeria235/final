import { Component, OnInit, HostListener, Input} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './user';
import { ViewChild, ElementRef } from '@angular/core';
import { Http} from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, EmailValidator,FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
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

  apiUrl = 'http://localhost:8080';

  form: FormGroup;
  loading = false;
  result;

  constructor(private userService: UserService,
              private http : HttpClient,
              private router : Router,
              private tokenService : TokenService,
              private authService : AuthService,
              private fb: FormBuilder,) {
                this.form = this.fb.group({
                  file: ['', Validators.required]
                });
              }

  ngOnInit() {
  }


  login() {
    console.log("SigninComponent #login() called.")
    this.userService.getUsers(this.loginUser)
    .subscribe((user : User) => {
        if(user==null){
          alert("아이디 또는 비밀번호를 확인해주세요.");
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

  onSubmit(files: FileList) {
    const formData = new FormData();
    formData.append('file', files[0]);

    this.loading = true;
    // Send data (payload = formData)
    // console.log(formData.get('file'));
  //  폼데이터를 서버로 전송한다.
    this.http.post(`${this.apiUrl}/uploadFile`, formData)
      .subscribe(res => {
        this.result = res;
        this.loading = false;
        this.file.setValue(null);
        alert("업로드완료" + this.result.fileDownloadUri);
        this.user.u_profileImg=this.result.fileDownloadUri;
      });
  }

  get file() {
    return this.form.get('file');
  }


}
