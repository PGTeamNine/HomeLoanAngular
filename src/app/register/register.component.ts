import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer:Customer = new Customer();
  constructor(private fb:FormBuilder,private registerService:RegisterService){}
  message:String;
  showSuccess:boolean;
  hideForm:boolean;
  // regForm= new FormGroup({
  //   customerName: new FormControl(''),
  //   customerEmail: new FormControl(''),
  //   customerDob: new FormControl(''),
  //   customerPassword: new FormControl(''),
  //   aadharNumber: new FormControl(''),
  //   panNumber: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   organizationType: new FormControl(''),
  //   employmentType: new FormControl(''),
  //   retirementAge: new FormControl(''),
  //   customerGender: new FormControl(''),
  //   customerIncome: new FormControl(''),
  // })
  
  regForm = this.fb.group({
    customerName: ['',[Validators.required]],
    customerEmail: ['abinandan2018@gmail.com',Validators.required],
    customerDob: ['2022-07-21',Validators.required],
    customerPassword: ['@Dddd1234',Validators.required],
    aadharNumber: ['789456123012',Validators.required],
    panNumber: ['EEEEE1111E',Validators.required],
    phoneNumber: ['9999999999',Validators.required],
    organizationName: ['ddd',Validators.required],
    employmentType: ['',Validators.required],
    retirementAge: ['50',Validators.required],
    customerGender: ['',Validators.required],
    customerIncome: ['50000',Validators.required]
  })
  
  onSubmit(){
    // console.log(this.regForm.value);
    // console.log(this.regForm.valid);
    if(this.regForm.valid){
      this.customer = JSON.parse(JSON.stringify(this.regForm.value));
      console.log(this.customer);
      this.registerService.signup(this.customer).subscribe(
      msg=>{
        this.message = JSON.parse(JSON.stringify(msg));
        console.log(this.message);
        
        console.log(this.message=="Signup successful");
        if(this.message==="Signup successful"){
          this.showSuccess = true;
          this.hideForm = true;
        }
        else{
          this.showSuccess = false;
        }
      }
      )
    }

    }
    
      
  ngOnInit(){
    // console.log(this.regForm.value);
    
  }
  
}
