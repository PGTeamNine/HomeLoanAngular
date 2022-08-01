import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../application';
import { Customer } from '../customer';
import { Property } from '../property';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

 constructor(private registerService:RegisterService,private routerLink:Router) { }
  customer:Customer = new Customer();
  property:Property = new Property();
  application:Application = new Application();
  cusId:number=JSON.parse(sessionStorage.getItem("userId"));
  title = 'Services';
  addCommas = new Intl.NumberFormat('en-IN');
  x:any; // (1+r)^n
  calcDesc:any;
  displayResult:any ; // display calculted output
  percentageBar:any;
  principal:any;
  interest:any;
  principalPercent:any;
  interestPercent:any;
  formdata:any; // Data of ELIGIBILTY Form 
  formdata1:any; // Data of EMI Form 
  income:any; // Monthly income input of ELIGIBILTY Form
  roi:any; // Rate of interest input of ELIGIBILTY Form
  loan:any; // Loan amount input of EMI Form
  roi1:any; // Rate of interest input of EMI Form
  tenure:any; // Tenure input of EMI Form
  loanEligibility:any; // Calculated Maximum eligible loan 
  loanPayable:any;

  loanEmi:any; // Calculated EMI
  selected1= ''; // When 1st(Eligibility) tab is selected this gets the value 'selected-tab'
  selected2= ''; // When 2st(EMI) tab is selected this gets the value 'selected-tab'
  visible1=''; // To make ELIGIBILTY FORM invisible wheck emi tab is clicked
  visible2=''; // To make EMI FORM invisible wheck eligibilty tab is clicked
  
  // On clicking ELIGIBILITY TAB
  public onClick1(){
    this.selected1 = 'selected-tab'
    this.selected2 = ''
    this.visible1=''
    this.visible2='calc-invisible'
    this.displayResult.innerHTML=``;
  }
  // On clicking EMI TAB
  public onClick2(){
    this.selected1 = ''
    this.selected2 = 'selected-tab'
    this.visible1='calc-invisible'
    this.visible2=''
  }
  // On submiting ELIGIBILITY FORM
  public onSubmitEligibility(eliForm:any){
    this.income = eliForm.income;
    this.roi = eliForm.roi;
    
    this.loanEligibility = 60 * 0.6 *this.income;
    
    
   this.displayResult.innerHTML = `
   <div>
      You are eligible for a loan amount of
       <span class="amount amount-highlight">${this.loanEligibility}</span>
    </div>
    <a [routerLink]="['/registerLink']"><button class="btn">apply now</button></a>
   </div>
   `;
  }
  // On submiting EMI FORM
  public onSubmitEmi(emiForm:any){
    this.loan = emiForm.loan;
    this.roi1 = (emiForm.roi1/12)/100;
    this.tenure = emiForm.tenure;
    console.log(10/12/100);
    
    this.x = Math.pow((1+this.roi1),this.tenure);
    // console.log(this.x);
    this.loanEmi = this.loan*this.roi1*(this.x/(this.x-1));
    this.loanPayable = this.loanEmi*this.tenure;
    // console.log(Math.round(this.loanEmi));
    this.loanPayable = Math.round(this.loanPayable);
    this.loanEmi = Math.round(this.loanEmi);
    this.principalPercent = Math.round((this.loan/this.loanPayable)*100);
    this.interestPercent = Math.round((this.loanPayable-this.loan)/(this.loanPayable)*100);
    console.log(this.principalPercent);
    console.log(this.interestPercent);
    
    this.displayResult.innerHTML = `
    <div>
      Monthly EMI
       <span class="amount amount-highlight">&#X20B9;${this.addCommas.format(this.loanEmi)}</span>
    </div>
    <div>
      Principal amount
       <span style="color:rgb(32, 115, 2);" class="amount">&#X20B9;${this.addCommas.format(this.loan)}</span>
    </div>
    <div>
       Interest amount
        <span style="color:rgb(247, 129, 3);" class="amount">&#X20B9;${this.addCommas.format(this.loanPayable-this.loan)}</span>
    </div>
    <div>
       Loan payable
       <span class="amount">&#X20B9;${this.addCommas.format(this.loanPayable)}</span>
    </div>
    <a [routerLink]="['/registerLink']"><button class="btn">apply now</button></a>
    `;
    this.displayResult.style=`
      animation: slowMotionText 3s ease-out 1;
    `
    this.calcDesc.style=`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    `;
    this.percentageBar.style=`
    display: block;
    `
    this.percentageBar.innerHTML = `
        <div class="principal"><h3>${this.principalPercent}%</h3></div>
        <div class="interest"><h3>${this.interestPercent}%</h3></div>
    `;
    this.principal = document.querySelector('.principal');
    this.interest = document.querySelector('.interest');
    this.principal.style=`
      height:${this.principalPercent}%;
    `
    this.interest.style=`
      height:${this.interestPercent}%;
    `
  }
  showStatus1:boolean;
  closeSide:boolean;
  // When this class gets initialized 
  onStatusClick(){
    this.showStatus1=true;
    console.log(this.showStatus1);
    
  }
  onClose(){
    this.closeSide=!this.closeSide;
  }
  onClickApply(){
    this.routerLink.navigate(['applynewLink']);
  }
  showApplication:boolean;

 
  ngOnInit(): void {
    
    // this.registerService.getCustomer(JSON.parse(sessionStorage.getItem("userId"))).subscribe(
    //   cus=>{
    //     this.customer = JSON.parse(cus);
    //     console.log(this.customer.customerName);
        
    //   }
    // )
    this.showApplication;
    this.closeSide = false;
    this.showStatus1 = false;
    this.displayResult=  document.querySelector('.description-output');
    this.calcDesc=  document.querySelector('.calc-description');
    this.percentageBar = document.querySelector('.percentage');
    this.selected1 = 'selected-tab'
    this.visible2='calc-invisible'
    this.formdata = new FormGroup({
         income: new FormControl(),
         roi: new FormControl()
      });
      this.formdata1 = new FormGroup({
         loan: new FormControl(),
         roi1:new FormControl(),
         tenure: new FormControl()
      });
    this.registerService.getApplicationByCustomer(this.cusId).subscribe(
      appl=>{
        console.log(appl);
        if(appl!=null){
          this.showApplication=true;
          this.application = appl;
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
    // sessionStorage.setItem('showAppBtn',this.showApplication.toString());

  }


}
