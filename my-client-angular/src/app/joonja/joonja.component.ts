import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailpageHttpService } from '../detailpage-http.service';
@Component({
  selector: 'app-joonja',
  templateUrl: './joonja.component.html',
  styleUrls: ['./joonja.component.css']
})
export class JoonjaComponent implements OnInit {
  pageNo : number;
  constructor(private route : ActivatedRoute,
              private detailPageHttpService : DetailpageHttpService) {
   }

   ngOnInit(){
         this.route.params.subscribe((params) => {
         this.pageNo = params["pageNo"];
         //load record data


    });
  }

}
