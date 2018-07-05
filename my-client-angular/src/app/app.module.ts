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

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HomeComponent } from './home/home.component';




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
    HomeComponent
  ],
  imports: [
    BrowserModule, SwiperModule, AppRoutingModule,
    HttpModule, FormsModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
