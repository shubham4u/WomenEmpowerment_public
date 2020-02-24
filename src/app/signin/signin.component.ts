import { Component, OnInit } from '@angular/core';
import { LoginUser } from './loginuser';
import { Router, RouterLink } from '@angular/router';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router, private service: AppserviceService) { }

  email=false;
  password=false;

  ngOnInit() {
  }
  loginuser:LoginUser = new LoginUser();
  signin() {
    console.log(this.loginuser);
    this.service.loginData(this.loginuser);
    this.router.navigate(['/step/registration/option']);
  }
}
