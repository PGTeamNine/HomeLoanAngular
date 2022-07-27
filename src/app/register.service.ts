import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  
  loginCustomer(login:Login):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:9090/customer/login",login);
  }

  signup(customer:Customer):Observable<String>{
    return this.httpClient.post("http://localhost:9090/customer/signup",customer,{responseType: 'text'});
  }

}
