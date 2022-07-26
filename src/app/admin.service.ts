import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';
import { Customer } from './customer';
import { Customerlist } from './customerlist';
import { Documents } from './documents';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  getAllCustomers():Observable<Customerlist[]>{
    console.log("Test")
    return this.httpClient.get<Customerlist[]>("http://localhost:9090/customers/viewAllCustomers");
  }
  getPending():Observable<Application[]>{
    return this.httpClient.get<Application[]>("http://localhost:9090/application/pendingApp");
  }
  getApproved():Observable<Application[]>{
    return this.httpClient.get<Application[]>("http://localhost:9090/application/approvedApp");
  }
  getRejected():Observable<Application[]>{
    return this.httpClient.get<Application[]>("http://localhost:9090/application/rejectedApp");
  }
  approve(cusId:number):Observable<string>{
    return this.httpClient.get<string>("http://localhost:9090/application/approveApp/"+cusId);
  }
  reject(cusId:number):Observable<string>{
    return this.httpClient.get<string>("http://localhost:9090/application/rejectApp/"+cusId);
  }
  viewDoc(cusId:number,type:string):Observable<Documents>{
    return this.httpClient.get<Documents>("http://localhost:9090/documents/profile?customerId="+cusId+"&type="+type);
  }

}
