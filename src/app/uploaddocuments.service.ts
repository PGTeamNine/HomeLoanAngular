import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Applyloan } from './applyloan';
import { Applyproperty } from './applyproperty';
import { Documents } from './documents';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class UploaddocumentsService {
  
  constructor(private httpClient:HttpClient) { 

    
  }
  document:string[]=[];
  
  upload(files:string[],formData:FormData):Observable<string>{
    this.document[0] = 'aadhar';
    this.document[1] = 'pan';
    this.document[2] = 'birth';
    this.document[3] = 'passbook'
    this.document[4] = 'incomeStatement'
    for(let i=0;i<files.length;i++){
      console.log(this.document[i]);
      
      formData.append(this.document[i],files[i]);
    }
    return this.httpClient.post("http://localhost:9090/documents/uploadDoc",formData,{responseType:'text'});
  }
  property(property:Applyproperty):Observable<String>{
return this.httpClient.post("http://localhost:9090/properties/addProperty",property,{responseType:'text'});
  }

  application(application:Applyloan):Observable<String>{
return this.httpClient.post("http://localhost:9090/application/addApplication",application,{responseType:'text'});
  }
}
