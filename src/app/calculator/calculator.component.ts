import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'Services';
  x:any; // (1+r)^n
  displayResult:any ; // display calculted output
  formdata:any; // Data of ELIGIBILTY Form 
  formdata1:any; // Data of EMI Form 
  income:any; // Monthly income input of ELIGIBILTY Form
  roi:any; // Rate of interest input of ELIGIBILTY Form
  loan:any; // Loan amount input of EMI Form
  roi1:any; // Rate of interest input of EMI Form
  tenure:any; // Tenure input of EMI Form
  loanEligibility:any; // Calculated Maximum eligible loan 
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
    // console.log(Math.round(this.loanEmi));
    this.loanEmi = Math.round(this.loanEmi);
    
    this.displayResult.innerHTML = `
    <div>
      Monthly EMI
       <span class="amount amount-highlight">${this.loanEmi}</span>
    </div>
    <div>
      Principal amount
       <span class="amount">${this.loan}</span>
    </div>
    <div>
       Interest amount
        <span class="amount">${this.loanEmi*this.tenure}</span>
    </div>
    <div>
       Loan payable
       <span class="amount">${this.loanEmi*this.tenure - this.loan}</span>
    </div>
    <a [routerLink]="['/registerLink']"><button class="btn">apply now</button></a>
    `;
  }
  // When this class gets initialized 
  ngOnInit():void{
    this.displayResult=  document.querySelector('.calc-description');
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
  }
  constructor() { }
}
