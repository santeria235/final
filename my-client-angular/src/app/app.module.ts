import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


import { JoonjaComponent } from './joonja/joonja.component';
import { RecomendedAreaComponent } from './joonja/recomended-area/recomended-area.component';
import { PostareaComponent } from './joonja/postarea/postarea.component';
import { CommentComponent } from './joonja/comment/comment.component';
import { CommentCardComponent } from './joonja/comment/comment-card/comment-card.component';

import { DetailpageHttpService } from './detailpage-http.service';
import { CategoryHttpService } from './service/category-http.service'
import { CommentService } from './service/comment.service'
import { TokenService } from './service/token.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { InvestService } from './service/invest.service';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SigninComponent } from './signin/signin.component';
import { EditorComponent } from './joonja/editor/editor.component';
import { PurchaseComponent } from './joonja/postarea/purchase/purchase.component';






const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 4,
  centeredSlides: true
};



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    JoonjaComponent,
    RecomendedAreaComponent,
    PostareaComponent,
    CommentComponent,
    CommentCardComponent,
    SigninComponent,
    EditorComponent,
    FileUploadComponent,
    PurchaseComponent


  ],
  imports: [
    BrowserModule, SwiperModule, AppRoutingModule,
    HttpModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, DetailpageHttpService, CategoryHttpService, CommentService, TokenService, AuthService, UserService, InvestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
