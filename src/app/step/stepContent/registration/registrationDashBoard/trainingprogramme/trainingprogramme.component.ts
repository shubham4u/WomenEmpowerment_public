import { Component, OnInit } from '@angular/core';
import { StepserviceService } from 'src/app/step/stepservice.service';

@Component({
  selector: 'app-trainingprogramme',
  templateUrl: './trainingprogramme.component.html',
  styleUrls: ['./trainingprogramme.component.css']
})
export class TrainingprogrammeComponent implements OnInit {
  TrProgrammeList;

  constructor(private service: StepserviceService) { }

  ngOnInit() {
    this.service.getTrProgrammeDetails().subscribe((data)=>{
      console.log(JSON.stringify(data));
      this.TrProgrammeList = data;
    })
  }

}
