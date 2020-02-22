import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { Router, RouterLink } from '@angular/router';
import { StepserviceService } from '../../stepservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  
  stateInfo: any[] = [];
  countryInfo: number;
  cityInfo: any[] = [];
  

  constructor(private router:Router, private service: StepserviceService) { }

  contactno=false;
  adharno=false;
  mstatus=false;
  hqualification=false;
  // address=false;
  steppassword=false;
  stepcpassword=false;

  namePattern ="^[a-zA-Z\s]*$";
  mailPattern="^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$";
  contactnoPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  adharPattern = "^\d{4}\s\d{4}\s\d{4}$";
  stepdatePattern = "/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/";

  user:User = new User();

  ngOnInit() {
    this.selected();
  }

  stepregister() {
    console.log(event.target);
    console.log("user data", this.user);
    this.service.stepRegisterAddData(this.user);
    this.router.navigate(['/step/stepabout']);
  }


  selectedLevel;
  CountryName:Array<Object> = [
      {id: 0, CountryName: "Indian"}
  ];
  selected() {
    this.onChangeCountry("India");
  }

  onChangeCountry(countryValue) {
    this.service.allCountries().
    subscribe(
      data2 => {
        console.log(data2.Countries[100].States);
        this.stateInfo=data2.Countries[100].States;
        this.cityInfo=this.stateInfo[21].Cities;
        console.log("city info",this.cityInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
    
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
  
}
