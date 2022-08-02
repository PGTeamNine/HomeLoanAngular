import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Applyloan } from '../applyloan';
import { Applyproperty } from '../applyproperty';
import { Customer } from '../customer';
import { Documents } from '../documents';
import { Property } from '../property';
import { RegisterService } from '../register.service';
import { UploaddocumentsService } from '../uploaddocuments.service';

@Component({
  selector: 'app-applynew',
  templateUrl: './applynew.component.html',
  styleUrls: ['./applynew.component.css']
})
export class ApplynewComponent implements OnInit {

  constructor(private documentsrService:UploaddocumentsService,private fb:FormBuilder,
    private routerLink:Router,private route: ActivatedRoute,private registerService:RegisterService) { }
documents:Documents = new Documents();
maxLoan:number=0;
selectedFiles:string[] = [];
progressInfos=[];
customer:Customer = new Customer();
docForm = this.fb.group({
  aadhar: ['',[Validators.required]],
  pan: ['',[Validators.required]],
  birth: ['',[Validators.required]],
  incomeStatement:['',Validators.required],
  passbook:['',Validators.required],
})
propForm=this.fb.group({
  propertyLocation:['',Validators.required],
  propertyAmount:['',Validators.required],
  propertyType:['',Validators.required]
})
loanForm=this.fb.group({
  loanAmmount:['',Validators.required],
  tenure:['',Validators.required],
  maxLoanGrant:[sessionStorage.getItem('maxLoan'),Validators.required]
})
// j:number=0;
onFileChange(event) {
  this.progressInfos=[];
    for(let k = 0;k<event.target.files.length;k++){
      console.log(event.target.files[k]);
      
      this.selectedFiles.push(event.target.files[k]);
    }
    
  }
  property:Applyproperty = new Property();
  message1:string;
  property1(){
    if(this.propForm.valid){
      // this.message1=""
      this.property = JSON.parse(JSON.stringify(this.propForm.value));
      this.property.customerId=JSON.parse(sessionStorage.getItem('userId'))
      console.log(this.property);
      this.documentsrService.property(this.property).subscribe(
      msg=>{
        console.log(msg);
        sessionStorage.setItem('propCorrect','Property Added Succesfully.')
        this.message1 = JSON.stringify(msg);
        console.log(this.message1);
        // this.message = JSON.parse(JSON.stringify(msg));
        // console.log(this.message);
        
        // console.log(this.message=="Signup successful");
        // if(this.message==="Signup successful"){
        //   this.showSuccess = true;
        //   this.hideForm = true;
        //   this.showLoading = false;
        // }
        // else{
        //   this.showLoading = false;
        //   this.showSuccess = false;
        // }
      }
      )
    }
else{
      // this.showLoading = false;
      // this.message1="Invalid inputs. Please correct them."
    }
  }
  message2:string;
  upload() {
    console.log(this.message2);
    let formData = new FormData();
console.log();

formData.append('customerId',JSON.parse(sessionStorage.getItem('userId')))

this.documentsrService.upload(this.selectedFiles,formData).subscribe(
  msg=>{
    console.log(msg);
    sessionStorage.setItem('docCorrect','Success')
    this.message2 = JSON.stringify(msg);
    console.log(this.message2);
    
  }
  )
  
}
application:Applyloan;
loanErrorMessage:string;
isCorrect:boolean=false;
application1(){
  console.log(this.message2);
  
  this.isCorrect = sessionStorage.getItem('propCorrect')=='Property Added Succesfully.'&& sessionStorage.getItem('docCorrect')=='Success'?true:false;
  console.log(this.message2);
  
  if(this.loanForm.valid && this.isCorrect){
    this.application = JSON.parse(JSON.stringify(this.loanForm.value))
    this.application.customerId = JSON.parse(sessionStorage.getItem('userId'));
    this.documentsrService.application(this.application).subscribe(
      msg=>{
        console.log(msg);
        console.log(msg=="Loan Application Added.");
        
        if(msg=="Loan Application Added."){
          this.routerLink.navigate(['../customerHomeLink'], { relativeTo: this.route })
          sessionStorage.setItem('showAppBtn',true.toString());
        }
      }
    )
  }
  else{
    this.loanErrorMessage = "Please upload documents and property details first";
    console.log("Please upload documents and property details first");
    
  }
}
  ngOnInit(): void {
    console.log(this.message2);
    console.log(this.isCorrect);
    console.log(this.maxLoan);
    this.registerService.getCustomer(JSON.parse(sessionStorage.getItem('userId'))).subscribe(
      c=>{
        this.customer=c;
        console.log(c);
        console.log(this.customer.customerIncome);
        this.maxLoan=this.customer.customerIncome*0.6*60;
        sessionStorage.setItem('maxLoan',JSON.stringify(this.maxLoan));
        console.log(this.maxLoan);
      }
    )
    console.log(this.maxLoan);
    
    
      
      
      
  }

}
