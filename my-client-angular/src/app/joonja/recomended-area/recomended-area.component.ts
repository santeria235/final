import { Component, OnInit } from '@angular/core';
import { Card } from '../../section/section.component';


@Component({
  selector: 'app-recomended-area',
  templateUrl: './recomended-area.component.html',
  styleUrls: ['./recomended-area.component.css']
})
export class RecomendedAreaComponent implements OnInit {

  cards : Card[] = [
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 },
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 },
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 },
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 },
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 },
    { mainImg:'dmitri-popov-326976.jpg', profileImg:'averie-woodard-319832.jpg', text:'111', like:1 , comment:1, viewCount:1 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
