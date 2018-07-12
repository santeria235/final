import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-joonja',
  templateUrl: './joonja.component.html',
  styleUrls: ['./joonja.component.css']
})
export class JoonjaComponent implements OnInit {
  pageNo : number;
  constructor(private route : ActivatedRoute) {
   }

   ngOnInit(){
         this.route.params.subscribe((params) => {
         this.pageNo = params["pageNo"];
         //load record data
    });
  }

}
