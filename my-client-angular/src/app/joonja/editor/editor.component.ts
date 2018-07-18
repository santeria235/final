import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { CategoryHttpService, Category } from '../../service/category-http.service';
import { AuthService } from '../../service/auth.service';
import { User } from '../../signin/user';
import { DetailpageHttpService } from '../../detailpage-http.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  category : string = "카테고리"; //카테고리 드롭다운 상자 스트링

  apiUrl = 'http://localhost:8080';

  form: FormGroup;
  loading = false;
  imageSrc : string;
  // thumbnailImgFile : string; // 썸네일이미지 url
  // detailImgFile : string; // 디테일이미지 url
  resultMap = new Map();

  result; // file upload 수행 이후 서버로부터 수신한 데이터

  detailPageForPost : DetailPage = new DetailPage();
  public categories : Category[];
  hashtags : string
  loggedInUser : User;

  constructor(private categoryHttpService : CategoryHttpService,
              private authService : AuthService,
              private detailpageHttpService : DetailpageHttpService,
              private fb: FormBuilder,
              private http : HttpClient) {

                this.form = this.fb.group({
                  file: ['', Validators.required]
                });
               }

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });

    this.loggedInUser = this.authService.getLoggedInUser();
    this.detailPageForPost.u_id = this.loggedInUser.u_id;
  }

  getCategoryId(category : Category) {
    this.detailPageForPost.c_id = category.c_id;
    this.category = category.c_name;
  }

  InitializeDetailpage() {
    this.detailPageForPost.d_currentmoney = 0;
    this.detailPageForPost.d_detailimg = this.resultMap.get('detailImgFile')
    this.detailPageForPost.d_thumbnailimg = this.resultMap.get('thumbnailImgFile')
    this.detailPageForPost.d_likeCount = 0;
    this.detailPageForPost.d_viewCount = 0;
    this.detailPageForPost.d_commentCount = 0;
    this.detailPageForPost.d_date = new Date();
    this.detailPageForPost.d_isConfirmed = 'T';
  }

  postDetailpage() {
    console.log('----- EditorComponent #postDetailpage() called -----');
    this.InitializeDetailpage();
    console.log(JSON.stringify(this.detailPageForPost));
    this.detailpageHttpService.postDetailpage(this.detailPageForPost)
    .subscribe(() => {
      alert("상품등록이 완료되었습니다. 관리자 승인 후에 메인페이지에 게시됩니다.");
      console.log(this.detailPageForPost);
      // this.getComments(this.pageNo);
    });
  }

  onFileChange(files: FileList) {
    if (files && files.length > 0) {
      // For Preview
      const file = files[0];
      const reader = new FileReader();

      /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
        따라서 파일 경로를 img 태그에 바인딩할 수 없다.
        FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
        base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      /* reactive form에서 input[type="file"]을 지원하지 않는다.
        즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
        https://github.com/angular/angular.io/issues/3466
        form validation을 위해 file.name을 폼컨트롤에 set한다. */
      this.file.setValue(file.name);
    }
  }

  onSubmit(files: FileList, key : String) {
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
        this.resultMap.set(key, this.result.fileDownloadUri);
      });
  }

  get file() {
    return this.form.get('file');
  }

  // setThumbnailImgFile(file : FileList) {
  //   this.thumbnailImgFile = file;
  // }
  //
  // setDetailImgFile(file : FileList) {
  //   this.detailImgFile = file;
  // }
}
