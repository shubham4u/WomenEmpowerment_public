import { Component, OnInit } from '@angular/core';
import { StepserviceService } from 'src/app/step/stepservice.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  FacilityList;

  constructor(private service: StepserviceService) { }

  ngOnInit(): void {
    this.service.getFacilityDetails().subscribe((data)=>{
      console.log(JSON.stringify(data));
      this.FacilityList = data;
    })
  }
  FacApply() {
    // sessionStorage.setItem("userid",userid);
    let appiedfacdata = {
     
      toString() {
             var jsondata = `{nfacId:${this.nfacId}, }`;
        return jsondata;
      }
    };
    console.log(appiedfacdata);
    
    this.service.addBookFacility(appiedfacdata);
  }
}
