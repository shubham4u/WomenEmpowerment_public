import { Component, OnInit } from '@angular/core';
import { NgoserviceService } from 'src/app/ngo/ngoservice.service';
import { Router, RouterLink } from '@angular/router';
import { NgoFacility } from './NgoFacility';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private router:Router, private service: NgoserviceService, private http:HttpClient) { }

  ngofac: NgoFacility = new NgoFacility();

  ngOnInit() {
     
    }

    ngofacregister() {

      let ngofacdata = {
        n_FacId: this.ngofac.n_FacId,
        n_FacName: this.ngofac.n_FacName,
        n_FacCapacity:this.ngofac.n_FacCapacity,
        n_FacCity:this.ngofac.n_FacCity,
        ngofc : 1,
        toString() {
               var jsondata = `{n_FacId:${this.n_FacId}, n_FacName:"${this.n_FacName}", n_FacCapacity:${this.n_FacCapacity},
       ngofc:${this.ngofc}, n_FacCity:"${this.n_FacCity}"}`;
          return jsondata;
        }
      };
      
        console.log("Added changes in code "+ngofacdata);
        
        let url="http://192.168.14.74:8686/WomenEmpowermentV2/postNgoFacReg";
        this.http.post(url, ngofacdata).subscribe((data)=>{
          console.log("data",data);
          
        })
      this.router.navigate(['/ngo/criteria']);
    }
}
