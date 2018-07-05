import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../recomended-area.component';

@Component({
  selector: 'app-recomend',
  templateUrl: './recomend.component.html',
  styleUrls: ['./recomend.component.css']
})
export class RecomendComponent implements OnInit {
@Input('card') card : Card;
  constructor() { }

  ngOnInit() {
  }

}
