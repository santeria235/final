import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { CategoryHttpService, Category } from '../service/category-http.service';
import { CategoryComponent } from '../category/category.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories : Category[];

  constructor(private categoryHttpService : CategoryHttpService) { }

  ngOnInit() {
    this.categoryHttpService.findAll().subscribe(res => {
      this.categories = res;
    });
  }


}
