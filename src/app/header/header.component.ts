import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user;

  constructor(private appSvc:AppserviceService) { }

  ngOnInit() {
    this.appSvc.getUser()
    .subscribe(
      user=>{
        console.log(user);
        this.user=user;
      }
    )
  }

}
