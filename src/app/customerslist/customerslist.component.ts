import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Customerlist } from '../customerlist';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  customers:Customerlist[] = [];
  searchById:any;
  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(
      list=>{
        console.log(list);
        
        this.customers = list;
        console.log(this.customers);
        
      }
    )
  }

}
