import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../section.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('card') card : Card;
  constructor() { }

  ngOnInit() {
  }

}
