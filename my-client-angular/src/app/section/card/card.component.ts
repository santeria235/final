import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../detailpage';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('card') card : DetailPage;
  constructor() { }

  ngOnInit() {
  }

}
