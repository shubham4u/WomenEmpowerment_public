import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepserviceService {
  
  

  constructor(private http:HttpClient) { }

  appliedfacdata: any;
  ngodata:any;
  stepdata: any;
  
  stepRegisterAddData(user: User) {
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

  addBookProgramme(appliedprogdata) {
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postProgBooking";
    this.http.post(url, appliedprogdata).subscribe((data)=>{
      console.log("data",data);
    })
  }

   addBookFacility(appliedfacdata) {
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postFacBooking";
    this.http.post(url, appliedfacdata).subscribe((data)=>{
      console.log("data",data);
    })
  }
  getngodata() {
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/getngo";
    this.http.post(url,  this.ngodata).subscribe((data)=>{
      console.log("data",data);
    })
  }
  getstepdata() {
    
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/getsteLogList";
    return this.http.get(this.stepdata);
      
  }

}
