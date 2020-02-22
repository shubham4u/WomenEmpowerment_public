import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class StepserviceService {

  constructor(private http:HttpClient) { }

  stepRegisterAddData(user: User) {
    alert('checkId is changed or not')
    console.log(JSON.stringify(user));
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/poststepLogList";
    this.http.post(url, user).subscribe((data)=>{
      console.log("data",data);
      
    })
  }

  getFacilityDetails() {
    let facurl="http://192.168.14.74:8686/WomenEmpowermentV2/getNgoFacReg";
    return this.http.get(facurl);
  }

  
  getTrProgrammeDetails() {
    let trprogrammeurl="http://192.168.14.74:8686/WomenEmpowermentV2/getNgoProgReg";
    return this.http.get(trprogrammeurl);
  }
}
