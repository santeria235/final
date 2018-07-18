import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { CategoryHttpService, Category } from '../service/category-http.service';
import { DetailpageHttpService } from '../detailpage-http.service';
import { DetailPage } from '../section/detailpage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards : DetailPage[];
  public categories : Category[];
  public config: SwiperConfigInterface = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    autoHeight: false,
    speed: 500,
    loop: true,
    loopedSlides: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay : true,
    initialSlide : 3,
    loopAdditionalSlides : 3,
  };

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });
    this.show();
  }

  constructor(private categoryHttpService : CategoryHttpService,
              private detailPageHttpService : DetailpageHttpService ) { }


  show() {
    this.detailPageHttpService.findAll().subscribe(res => {
      this.cards = res;
    });
  }

  getDetailpageByCategoryId(category : Category) {
    this.detailPageHttpService.findByCategoryId(category).subscribe(res => {
      this.cards = res;
    });
  }


}
