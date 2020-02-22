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
    this.service.addBookProgramme();
  }
}
