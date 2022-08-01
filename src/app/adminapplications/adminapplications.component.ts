import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Application } from '../application';

@Component({
  selector: 'app-adminapplications',
  templateUrl: './adminapplications.component.html',
  styleUrls: ['./adminapplications.component.css']
})
export class AdminapplicationsComponent implements OnInit {

  constructor(private adminService:AdminService) { }
pending:Application[] = []
approve(cusId:number){
this.adminService.approve(cusId).subscribe(
  msg=>{
    console.log(msg);
    // this.
  }
)
}
reject(cusId:number){
this.adminService.approve(cusId).subscribe(
  msg=>{
    console.log(msg);
    // this.
  }
)
}
  ngOnInit(): void {
    this.adminService.getPending().subscribe(
        list=>{
          this.pending = list;
          console.log(this.pending);
          
        }
    )
  }

}
