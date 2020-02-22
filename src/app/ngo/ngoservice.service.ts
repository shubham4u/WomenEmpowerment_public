import { Injectable } from '@angular/core';
import { Ngo } from './Ngo';
import { HttpClient } from '@angular/common/http';
import { NgoFacility } from './ngoContent/register/ngodashboard/facility/NgoFacility';
import { TrPrg } from './ngoContent/register/ngodashboard/trainingprogramme/TrPrg';

@Injectable({
  providedIn: 'root'
})
export class NgoserviceService {

  constructor(private http:HttpClient) { }

  ngo: Ngo = new Ngo;
  ngofac: NgoFacility = new NgoFacility();
  trprg:TrPrg = new TrPrg(); 

  ngoRegisterAddData(ngo:Ngo) {
    alert('check Id is changed or not')
    console.log(JSON.stringify(ngo));
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postngo";
    this.http.post(url, ngo).subscribe((data)=>{
      console.log("data",data);
      
    })
  }

  addngofac(ngofac: NgoFacility) {
    alert('Json Problem of FK')
    console.log(JSON.stringify(ngofac));
    // let abc = ",'ngo':{'ngoid':1}";
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postNgoFacReg";
    this.http.post(url, ngofac).subscribe((data)=>{
      console.log("data",data);
      
    })
  }

  addngotrprg(trprg:TrPrg) {
    alert('Json Problem of FK')
    console.log(JSON.stringify(trprg));
    // let abc = ",'ngo':{'ngoid':1}";
    let url="http://192.168.14.74:8686/WomenEmpowermentV2/postNgoProgReg";
    this.http.post(url, trprg).subscribe((data)=>{
      console.log("data",data);
      
    })
  }


  addngofacData() {
    let facurl="http://192.168.14.74:8686/WomenEmpowermentV2/getNgoFacReg";
    return this.http.get(facurl);
  }


}
