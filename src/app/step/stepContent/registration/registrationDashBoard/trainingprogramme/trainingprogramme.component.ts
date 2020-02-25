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
      sessionStorage.setItem("ProgData", JSON.stringify(data));
    })
  }

  appliedprogramme(id:number) {

    sessionStorage.setItem("id", JSON.stringify(id));
    console.log(sessionStorage.getItem("id"));
    let nProgId = sessionStorage.getItem("id");

    let appliedprogdata = {
      programmid : nProgId,
      userid : 1,
  
      toString() {
             var jsondata = `{ngofacreg:${this.nfacId}, fbk: ${this.userid}}`;
        return jsondata;
      }
    };
    
    console.log(appliedprogdata);
    
    this.service.addBookProgramme(appliedprogdata);
  }
  
}
