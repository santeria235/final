import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { DetailpageHttpService } from '../../detailpage-http.service';

@Component({
  selector: 'app-recomended-area',
  templateUrl: './recomended-area.component.html',
  styleUrls: ['./recomended-area.component.css']
})
export class RecomendedAreaComponent implements OnInit {

  RecommendedCards : DetailPage[];

  constructor(private DetailpageHttpService: DetailpageHttpService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.DetailpageHttpService.findRecommendedDetailPage().subscribe(res => {
      this.RecommendedCards = res;
    });
  }

}
