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
      // console.log(JSON.stringify(data));
      this.FacilityList = data;
      sessionStorage.setItem("pogId", JSON.stringify(data));
    })
  }
  
  FacApply(id: number) {
    sessionStorage.setItem("id", JSON.stringify(id));
    console.log(sessionStorage.getItem("id"));
    let nFacId = sessionStorage.getItem("id");

    let appliedfacdata = {
      ngofacreg : nFacId,
      fbk : 1,
  
      toString() {
             var jsondata = `{ngofacreg:${this.nfacId}, fbk: ${this.userid}}`;
        return jsondata;
      }
    };
    
    this.service.addBookFacility(appliedfacdata);
  }
}
