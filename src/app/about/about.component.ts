import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  hide1:boolean;
  hide2:boolean;
  hide3:boolean;
  hide4:boolean;
  hide5:boolean;
  hide6:boolean;
  constructor() { }
  onClick1(){
    this.hide1=!this.hide1;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide5=false;
    this.hide6=false;    
  }
  onClick2(){
    this.hide1=false;
    this.hide2=!this.hide2;
    this.hide3=false;
    this.hide4=false;
    this.hide5=false;
    this.hide6=false;    
  }
  onClick3(){
    this.hide1=false;
    this.hide2=false;
    this.hide3=!this.hide3;
    this.hide4=false;
    this.hide5=false;
    this.hide6=false;    
  }
  onClick4(){
    this.hide4=!this.hide4;
    this.hide2=false;
    this.hide3=false;
    this.hide1=false;
    this.hide5=false;
    this.hide6=false;    
  }
  onClick5(){
    this.hide5=!this.hide5;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide1=false;
    this.hide6=false;    
  }
  onClick6(){
    this.hide6=!this.hide6;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide5=false;
    this.hide1=false;    
  }
  ngOnInit(): void {
    this.hide1=false;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide5=false;
    this.hide6=false;
    
  }

}
