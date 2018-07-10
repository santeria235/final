import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { CategoryHttpService, Category } from '../service/category-http.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})



export class CategoryComponent implements OnInit {
  public config: SwiperConfigInterface = {
    a11y: true,
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
    spaceBetween: 0,
    centeredSlides: true

  };
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  public categories : Category[];
  constructor(private categoryHttpService : CategoryHttpService ) { }

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });
  }

}
