import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Application } from '../application';

@Component({
  selector: 'app-approvedapplications',
  templateUrl: './approvedapplications.component.html',
  styleUrls: ['./approvedapplications.component.css']
})
export class ApprovedapplicationsComponent implements OnInit {
constructor(private adminService:AdminService){}
  approved:Application[] = []
  searchById:any;
  ngOnInit(): void {
    this.adminService.getApproved().subscribe(
        list=>{
          this.approved = list;
          console.log(this.approved);
          
        }
    )
  }

}
