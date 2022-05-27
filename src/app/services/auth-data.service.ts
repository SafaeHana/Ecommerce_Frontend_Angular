import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../register';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post('http://localhost:8000/api/register',data);
  }

  login(data:any){
    return this.httpClient.post('http://localhost:8000/api/login',data);
  }

}



