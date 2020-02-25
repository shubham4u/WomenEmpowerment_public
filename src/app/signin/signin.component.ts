import { Component, OnInit } from '@angular/core';
import { LoginUser } from './loginuser';
import { Router, RouterLink } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { StepserviceService } from '../step/stepservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginuser: LoginUser = new LoginUser();
  stepservice: any;

  constructor(private router: Router, private service: AppserviceService) { }

  ngOnInit() {
  }

  signin() {
    console.log(sessionStorage.getItem("stepdata"));
    
    this.service.loginData(this.loginuser)
      .subscribe(
        user => {
          if (user) {
            this.service.setUser(user);
            this.router.navigate(['/step/registration/option']);
          }
          else {
            alert("user Not exists")
          }
        },
        err => {
          alert("API call error")
        }
      )

      
  }
}
