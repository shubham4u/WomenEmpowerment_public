import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgoserviceService } from '../../ngoservice.service';
import { Ngo } from '../../Ngo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private router:Router, private service: NgoserviceService) { }

  namePattern ="^[a-zA-Z\s]*$";
  mailPattern="^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$";
  contactnoPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  adharPattern = "^\d{4}\s\d{4}\s\d{4}$";
  datePattern="/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/";
  passwordPattern ="^[a-zA-Z\s]*$";

  ngo: Ngo = new Ngo();

  // ngoid               =false;
  // ngoname             =false;
  // ngoemail            =false;
  // ngoaddress          =false;
  // ngocontact          =false;
  // ngoinchargename     =false;
  // ngoinchargeemail    =false;
  // ngopassword         =false;
  // ngoinchargecontactno=false;
  // ngoinchargeaddress  =false;
  // ngoinchargeadharno  =false;
  // ngocertificateno    =false;
  // ngoestablishmentyear=false;
  
  ngOnInit() {

  }

  ngoregister() {
    this.service.ngoRegisterAddData(this.ngo);
    // this.router.navigate(['/step/registration/option']);
    this.router.navigate(['/ngo/criteria']);
  }
}
