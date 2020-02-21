import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class StepserviceService {

  constructor(private http:HttpClient) { }

  stepRegisterAddData(user: User) {
    console.log(JSON.stringify(user));
    
    let url="http://localhost:8282/WomenEmpowermentV2/poststepLogList";
    this.http.post(url, user).subscribe((data)=>{
      console.log("data",data);
      
    })
  }

}
