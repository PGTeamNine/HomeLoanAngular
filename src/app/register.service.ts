import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';
import { Customer } from './customer';
import { Feedback } from './feedback';
import { Login } from './login';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  // LOGIN
  loginCustomer(login:Login):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:9090/customers/login",login);
  }
// REGISTER
  signup(customer:Customer):Observable<String>{
    return this.httpClient.post("http://localhost:9090/customers/signup",customer,{responseType: 'text'});
  }
// SEND FEEDBACK
  sendFeedback(feedback:Feedback){

  }
  // getCustomerDetails
  getCustomer(customerId:number):Observable<Customer>{
    return this.httpClient.post<Customer>("http://localhost:9090/customers/customer/"+customerId,{responseType: 'text'});
  }
  getApplicationByCustomer(customerId:number):Observable<Application>{
    return this.httpClient.get<Application>("http://localhost:9090/application/applicationForCust/"+customerId);
  
  }
  getPropertyByCustomer(customerId:number):Observable<Property>{
    return this.httpClient.get<Property>("http://localhost:9090/properties/viewPropertyOfCustomer/"+customerId);
  }

}
