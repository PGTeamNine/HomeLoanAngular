import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Application } from '../application';

@Component({
  selector: 'app-rejectedapplications',
  templateUrl: './rejectedapplications.component.html',
  styleUrls: ['./rejectedapplications.component.css']
})
export class RejectedapplicationsComponent implements OnInit {

  constructor(private adminService:AdminService) { }
rejected:Application[] = []
  ngOnInit(): void {
    this.adminService.getRejected().subscribe(
        list=>{
          this.rejected = list;
          console.log(this.rejected);
          
        }
    )
  }

}
