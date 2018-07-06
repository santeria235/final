import { Component, OnInit } from '@angular/core';
import { DetailPage } from './detailpage';
import { DetailpageHttpService } from '../detailpage-http.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  cards : DetailPage[];
  constructor(private DetailpageHttpService: DetailpageHttpService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.DetailpageHttpService.findAll().subscribe(res => {
      this.cards = res;
    });
  }
}
