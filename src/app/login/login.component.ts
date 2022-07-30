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
    console.log(this.login);
    this.registerService.loginCustomer(this.login).subscribe(
      msg=>{
        this.isValid = msg;
        if(this.isValid){
          console.log(this.login.customerId==6);
          
          if(this.login.customerId==23 && this.login.customerPassword=='Pass@123'){
            console.log("Admin Dashboard");
            this.message = "Login successful";
          this.router.navigate(['/adminDashboardLink']);
          // this.logout.innerHTML=`logout`;
          }
          else{
            sessionStorage.setItem('userId',JSON.stringify(this.login.customerId));
            this.router.navigate(['dashboardLink']);
          }
        }
        else{
          this.showLoading=false;
          this.message="Login failed. Wrong Credentials";
        }
      }
    )
  }

}
