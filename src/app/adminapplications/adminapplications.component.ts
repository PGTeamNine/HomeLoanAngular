import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Application } from '../application';

@Component({
  selector: 'app-adminapplications',
  templateUrl: './adminapplications.component.html',
  styleUrls: ['./adminapplications.component.css']
})
export class AdminapplicationsComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router,private route: ActivatedRoute) { }
pending:Application[] = []
searchById:any;
approve(cusId:number){
this.adminService.approve(cusId).subscribe(
  msg=>{
    console.log(msg);
    // this.router.navigate(['../adminApplicationsLink'], { relativeTo: this.route });
     window.location.reload();
  }
)
}
reject(cusId:number){
this.adminService.reject(cusId).subscribe(
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
