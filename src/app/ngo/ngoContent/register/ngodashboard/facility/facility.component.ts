import { Component, OnInit } from '@angular/core';
import { NgoserviceService } from 'src/app/ngo/ngoservice.service';
import { Router, RouterLink } from '@angular/router';
import { NgoFacility } from './NgoFacility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private router:Router, private service: NgoserviceService) { }

  ngofac: NgoFacility = new NgoFacility();

  ngOnInit() {
     
    }

    ngofacregister() {
      this.service.addngofac(this.ngofac);
      this.router.navigate(['/ngo/criteria']);
    }
}
