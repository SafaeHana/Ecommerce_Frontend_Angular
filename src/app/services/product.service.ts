import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='http://localhost:8000'
  constructor(private http:HttpClient) { }

  listProducts(){
    return this.http.get<any>(this.url+'/api/products');
  }

  httpOptions={
    headers :new HttpHeaders({
      'Contennt-Type':'application/json'
    })
  };

  addProducts(product:any): Observable<any>{
     return this.http.post<any>(this.url+'/api/addProduct',product,this.httpOptions);
  }

}


