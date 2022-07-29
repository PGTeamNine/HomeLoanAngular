import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login = new Login();
  message:String;
  isValid:boolean;
  showLoading:boolean;
  constructor(private registerService:RegisterService,private router:Router) { }
  // logout;
  ngOnInit(): void {
    // this.logout=document.querySelector('#login');

  }
  checkLogin(){
    this.showLoading=true;
    console.log(JSON.stringify(this.login));
    this.registerService.loginCustomer(this.login).subscribe(
      msg=>{
        this.isValid = msg;
        if(this.isValid){
          this.message = "Login successful";
          this.router.navigate(['dashboardLink']);
          // this.logout.innerHTML=`logout`;
        }
        else{
          this.showLoading=false;
          this.message="Login failed. Wrong Credentials";
        }
      }
    )
  }

}
