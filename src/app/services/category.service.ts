import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

url:string='http://localhost:8000';

  constructor(private  httpClient:HttpClient) { }
  
  listCategories(){
    return this.httpClient.get<any>(this.url+'/api/categories');
  }

  httpOptions={
    headers :new HttpHeaders({
      'Contennt-Type':'application/json'
    })
  };

  addCategory(category:any):Observable<any>{
    return this.httpClient.post<any>(this.url+'/api/addCategory',category,this.httpOptions);
  }

  find(id:number):Observable<any>{
    return this.httpClient.get(this.url+'/api/category/'+id);
  }

  update(id:number, category:any):Observable<any>{
    return this.httpClient.put(this.url+'/api/updateCategory/'+id,category,this.httpOptions);
  }

  deleteCategory(id:any):Observable<any>{
    return this.httpClient.delete(this.url+'/api/deleteCategory/'+id,this.httpOptions);
  }
}
