import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from './detailpage';
import { DetailpageHttpService } from '../detailpage-http.service';
import { CategoryHttpService, Category } from '../service/category-http.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  cards : DetailPage[];

  constructor(
    private DetailpageHttpService: DetailpageHttpService,
    private CategoryHttpService: CategoryHttpService
  ) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.DetailpageHttpService.findAll().subscribe(res => {
      this.cards = res;
    });
  }

  getDetailpageByCategoryId() {
    this.cards = this.DetailpageHttpService.selectedByCategory;
  }
}
