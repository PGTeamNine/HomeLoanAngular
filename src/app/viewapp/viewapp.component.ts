import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../application';
import { Customer } from '../customer';
import { Property } from '../property';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  constructor(private registerService:RegisterService,private routerLink:Router) { }
customer:Customer = new Customer();
  property:Property = new Property();
  application:Application = new Application();
  cusId:number=JSON.parse(sessionStorage.getItem("userId"));
  title = 'Services';
  showStatus1:boolean;
  onStatusClick(){
    this.showStatus1=true;
    console.log(this.showStatus1);
    
  }
  onClickApply(){
    this.routerLink.navigate(['applynewLink']);
  }
  showApplication:boolean;
  showAccount:boolean;
  monthlyEmi:number;
  ngOnInit(): void {
    
    // this.registerService.getCustomer(JSON.parse(sessionStorage.getItem("userId"))).subscribe(
    //   cus=>{
    //     this.customer = JSON.parse(cus);
    //     console.log(this.customer.customerName);
        
    //   }
    // )
    this.showApplication;
    
    this.showStatus1 = false;
    
    
    this.registerService.getApplicationByCustomer(this.cusId).subscribe(
      appl=>{
        console.log(appl);
        if(appl!=null){
          this.showApplication=true;
          this.application = appl;
          if(this.application.appStatus == "APPROVED"){
            this.showAccount = true;
            let l = this.application.loanAmmount;
            console.log(l);
            let r = (8/12)/100;
            console.log(r);
            
            let t = this.application.tenure;
            console.log(t);
            
            let y = Math.pow((1+(r)),t);
            console.log(y);
            
            this.monthlyEmi = Math.round(l*r*(y/(y-1)));
            console.log(this.monthlyEmi);
          }
          else{
            this.showAccount = false;
          }
        }
        else{
          this.showApplication=false;
        }
        console.log(this.application);
        
      }
    )
    this.registerService.getPropertyByCustomer(this.cusId).subscribe(
      prop=>{
        if(prop!=null){
          this.showApplication=true;

          this.property = prop;
        }
        else{
          this.showApplication=false;
        }
        console.log(this.property);
        
      }
    )
    console.log(this.application.appStatus);
    
    
    // sessionStorage.setItem('showAppBtn',this.showApplication.toString());

  }


}
