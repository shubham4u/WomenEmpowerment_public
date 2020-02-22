import { Injectable } from '@angular/core';
import { EndUser } from './signup/EndUser';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './signin/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }

  addData(enduser: EndUser) {
    console.log(JSON.stringify(enduser));
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postregList";
    // let url="http://localhost:8282/WomenEmpowermentV2/poststepregList";
    this.http.post(url, enduser).subscribe((data)=>{

    })
  }
  
  loginData(loginuser:LoginUser) {
    console.log(JSON.stringify(loginuser));
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/validateUser";
    // let url="#";
    this.http.post(url, loginuser).subscribe((data)=>{
      console.log("data",data);
    })
  }
}
