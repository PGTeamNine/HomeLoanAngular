import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Documents } from '../documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  customer:Customer = new Customer();
  customerId:number = JSON.parse(sessionStorage.getItem('userId'));
  docs:Documents = new Documents();
  viewClick(type:string){
    this.adminService.viewDoc(JSON.parse(sessionStorage.getItem('userId')),type).subscribe(
      docs1=>{
        // console.log("Customer: ");
        // console.log(docs1);
        
        // console.log(customer1);
        this.docs=docs1;
        console.log(this.docs);
        
        
      }
    )
  }
  ngOnInit(): void {
    this.viewClick('aadhar');
    this.viewClick('pan');
    this.viewClick('birth');
    this.viewClick('income');
    this.viewClick('passbook');
  }

}
