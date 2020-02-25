import { Component, OnInit } from '@angular/core';
import { StepserviceService } from '../../stepservice.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {
  ngodata: any;

  constructor(private service: StepserviceService) { }

  ngOnInit() {
    this.service.getngodata().subscribe((data)=>{
      console.log(JSON.stringify(data));
      this.ngodata = data;
      sessionStorage.setItem("pogId", JSON.stringify(data));
    })
  }

}
