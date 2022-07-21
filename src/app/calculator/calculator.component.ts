import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

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
   <div class="display-eligibility">
    <p>
      You are eligible for a loan amount of ${this.loanEligibility}
    </p>
    <a href="register.html"><button class="btn">apply now</button></a>
   </div>
   `;
    
    
    
    
  }
  public onSubmitEmi(emiForm:any){
    this.loan = emiForm.loan;
    this.roi1 = emiForm.roi1/100;
    this.tenure = emiForm.tenure/12;
    
    
    this.loanEmi = this.loan*this.roi1*Math.pow((1+this.roi1),this.tenure)/((Math.pow((1+this.roi1),this.tenure)-1));
    
    
   this.card.innerHTML = `
   <div class="display-eligibility">
    <p>
      Your EMI amount ${this.loanEmi}
    </p>
    <a href="register.html"><button class="btn">apply now</button></a>
   </div>
   `;
    
    
    
    
  }
  ngOnInit():void{
    this.card=  document.querySelector('.card');
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
