import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

import { JoonjaComponent } from './joonja/joonja.component';
import { RecomendedAreaComponent } from './joonja/recomended-area/recomended-area.component';
import { PostareaComponent } from './joonja/postarea/postarea.component';
import { CommentComponent } from './joonja/comment/comment.component';
import { CommentCardComponent } from './joonja/comment/comment-card/comment-card.component';

import { DetailpageHttpService } from './detailpage-http.service';
import { CategoryHttpService } from './service/category-http.service'
import { CommentService } from './service/comment.service'

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';






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
    SectionComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    CategoryComponent,
    HomeComponent,
    JoonjaComponent,
    RecomendedAreaComponent,
    PostareaComponent,
    CommentComponent,
    CommentCardComponent


  ],
  imports: [
    BrowserModule, SwiperModule, AppRoutingModule,
    HttpModule, FormsModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, DetailpageHttpService, CategoryHttpService, CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
