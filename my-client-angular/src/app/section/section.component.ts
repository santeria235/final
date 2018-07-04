import { Component, OnInit } from '@angular/core';

export class Card {
  mainImg : String;
  profileImg : String;
  text : String;
  like : Number;
  comment : Number;
  viewCount : Number;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
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
