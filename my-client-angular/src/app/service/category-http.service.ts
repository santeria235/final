import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';




export class Category {
  c_id : number;
  c_name : string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  constructor(private http: Http) { }

  findAll() {
    return this.http.get("http://localhost:8080/categories").pipe(
      map(res => {
        console.log(res);
        return res.json();
      })
    );
  }
}
