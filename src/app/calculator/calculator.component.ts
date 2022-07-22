import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  x:any;
  card:any ;
  title = 'FirstApp';
  formdata:any;
  formdata1:any;
  income:any;
  roi:any;
  loan:any;
  roi1:any;
  tenure:any;
  loanEligibility:any;
  loanEmi:any;
  selected1= '';
  selected2= '';
  visible1='';
  visible2='';
  rotateAndChange:any;
  public onClick1(){
    this.selected1 = 'selected-tab'
    this.selected2 = ''
    this.visible1=''
    this.visible2='calc-invisible'
  }
  public onClick2(){
    this.selected1 = ''
    this.selected2 = 'selected-tab'
    this.visible1='calc-invisible'
    this.visible2=''
  }
 
 
  public onSubmitEligibility(eliForm:any){
    this.income = eliForm.income;
    this.roi = eliForm.roi;
    
    this.loanEligibility = 60 * 0.6 *this.income;
    
    
   this.card.innerHTML = `
   <div>
      You are eligible for a loan amount of
       <span class="amount amount-highlight">${this.loanEligibility}</span>
    </div>
    <a href="register.html"><button class="btn">apply now</button></a>
   </div>
   `;
    
    
    
    
  }
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
    
    
    
   this.card.innerHTML = `
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
    <a href="register.html"><button class="btn">apply now</button></a>
   `;
    
    
    
    
  }
  ngOnInit():void{
    this.card=  document.querySelector('.calc-description');
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
