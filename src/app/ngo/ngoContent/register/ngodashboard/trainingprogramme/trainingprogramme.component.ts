import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgoserviceService } from 'src/app/ngo/ngoservice.service';
import { TrPrg } from './TrPrg';

@Component({
  selector: 'app-trainingprogramme',
  templateUrl: './trainingprogramme.component.html',
  styleUrls: ['./trainingprogramme.component.css']
})
export class TrainingprogrammeComponent implements OnInit {

  constructor(private router:Router, private service: NgoserviceService) { }

  ngOnInit() {
  }

  trprg:TrPrg = new TrPrg(); 

  ngotrprgregister() {
    this.service.addngotrprg(this.trprg);
    // this.router.navigate(['/step/registration/option']);
    this.router.navigate(['/ngo/criteria']);
  }
}
