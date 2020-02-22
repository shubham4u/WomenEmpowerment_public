import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepserviceService {
  jsonurl :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  constructor(private http:HttpClient) { }

  stepRegisterAddData(user: User) {
    console.log(JSON.stringify(user));
    
    let url="http://localhost:8282/WomenEmpowermentV2/poststepLogList";
    this.http.post(url, user).subscribe((data)=>{
      console.log("data",data);
      
    })
  }

  allCountries(): Observable<any>{
    return this.http.get(this.jsonurl);
  }
}
