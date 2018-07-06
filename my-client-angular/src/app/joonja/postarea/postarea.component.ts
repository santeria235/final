import { Component, OnInit, Input } from '@angular/core';
import { DetailPage } from '../../section/detailpage';
import { DetailpageHttpService } from '../../detailpage-http.service';

@Component({
  selector: 'app-postarea',
  templateUrl: './postarea.component.html',
  styleUrls: ['./postarea.component.css']
})
export class PostareaComponent implements OnInit {
  dp : DetailPage;
  @Input('pageNo') pageNo : number;

  constructor(private DetailpageHttpService: DetailpageHttpService) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.DetailpageHttpService.findPageByPageNo(this.pageNo).subscribe(res => {
      this.dp = res;
    });
  }
}
