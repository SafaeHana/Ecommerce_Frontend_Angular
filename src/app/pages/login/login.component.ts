import { Component, OnInit } from '@angular/core';
import { AuthDataService } from '../../services/auth-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form={
    email:null,
    password:null
  }

  constructor(private authDataService:AuthDataService) { }

  ngOnInit(): void {
  }
 
  public error=null;
  submitLogin(){
    console.log(this.form);
    return this.authDataService.login(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
  }

  handleError(error:any){
    this.error=error.error.error
  }

}
