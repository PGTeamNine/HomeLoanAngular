import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashnav',
  templateUrl: './dashnav.component.html',
  styleUrls: ['./dashnav.component.css']
})
export class DashnavComponent implements OnInit {
closeSide:boolean;
  constructor() { }
onClose(){
    this.closeSide=!this.closeSide;
  }
  ngOnInit(): void {
  }

}
