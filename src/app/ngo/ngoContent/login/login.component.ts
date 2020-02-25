import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import{Login} from './login';
import { AppserviceService } from 'src/app/appservice.service';
//import { NgoserviceService } from '../../ngoservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  

  constructor(private router:Router,private service: AppserviceService) { }

  ngOnInit() {
  }

  signin() {
    this.service.loginNgoData(this.login)
      .subscribe(
        ngo => {
          if (ngo) {
            this.service.setUser(ngo);
            this.router.navigate(['/ngo/registration']);
          }
          else {
            alert("Ngo Not exists")
          }
        },
        err => {
          alert("API call error")
        }
      )

  }

}
