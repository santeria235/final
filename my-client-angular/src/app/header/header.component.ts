import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
// import { ProductService } from "../../shared/services/product.service";
// import { TokenService } from "../../shared/services/token.service";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  select = 'Home';
  numb:number;
  constructor(public authService: AuthService,
  private router: Router,
  // public productService: ProductService,
  // private tokenService: TokenService
) { }


  ngOnInit() {
    this.numb = 0;
    }


  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
    location.reload();
  }

  // adminlogout() {
  //   sessionStorage.clear();
  //   localStorage.clear();
  //   this.router.navigate(["/"]);
  //   location.reload();
  // }

  // countUp(){
  //   this.numb+=1;
  // }

}
