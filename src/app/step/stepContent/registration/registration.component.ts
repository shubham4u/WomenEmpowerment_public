import { Component, OnInit } from '@angular/core';
import { Validate } from './validate.component';
import { User } from '../../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  validate: Validate;

  vname=false;
  vemail=false;
  vdate=false;
  vcontactno=false;
  vadharno=false;
  vmstatus=false;
  vhqualification=false;
  vaddress=false;
  vsteppassword=false;
  vstepcpassword=false;

  user:User = new User();

  ngOnInit() {
  }

  stepregister() {

    this.validate = new Validate();
    if(this.validate.validateName(this.user.name)){
      this.vname=false;
    }
    else
    this.vname=true;
    
    if(this.validate.validateContact((String)(this.user.contact).length)){
      this.vcontactno=false;
    }
    else
    this.vcontactno=true;
    
    if(this.validate.validatePass(this.user.password)){
      this.vsteppassword=false;
    }
    else
    this.vsteppassword=true;
  
    if(this.validate.validateDate(this.user.dob)){
      this.vdate=false;
    }
    else
    this.vdate=true;
  
    if(this.validate.validateEmail(this.user.email)){
      this.vemail=false;
    }
    else
    this.vemail=true;
  
    
    if(this.validate.validateAddress((String)(this.user.address).length)) {
      this.vaddress=false;
    }
    else
    this.vaddress=true;
  

  if( this.validate.validateName(this.user.name) 
  && this.validate.validateContact((String)(this.user.contact).length)
  && this.validate.validateEmail(this.user.email)
  && this.validate.validateAddress((String)(this.user.address).length)
  && this.validate.validateDate(this.user.dob)
  && this.validate.validatePass(this.user.password)
  
  ) {
    alert("*************");
    // this.service.addUser(this.user)
    // this.router.navigate(['/login']);

  }
  }

}
