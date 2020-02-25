import { Injectable } from '@angular/core';
import { EndUser } from './signup/EndUser';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './signin/loginuser';
import{Login} from './ngo/ngoContent/login/login';
import { User } from './step/User';
import { Ngo } from './ngo/Ngo';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppserviceService {


  private userSubject=new Subject<any>();
  login: Login = new Login();

  constructor(private http: HttpClient) { }

  addData(enduser: EndUser) {
    console.log(JSON.stringify(enduser));
    let url = "http://192.168.14.74:8686/WomenEmpowermentV2/postregList";
    // let url="http://localhost:8/WomenEmpowermentV2/poststepregList";
    this.http.post(url, enduser).subscribe((data) => {

    })
  }

  loginData(loginuser: LoginUser): Observable<any> {
    let url = "http://192.168.14.74:8686/WomenEmpowermentV2/validateUser";
    return this.http.post(url, loginuser)
  }

  loginNgoData(login: Login): Observable<any> {
   
    let url = "http://192.168.14.74:8686/WomenEmpowermentV2/validateNgo";
    return this.http.post(url,login)
  }

  setUser(user: Ngo | User) {
    let value = {
      userType: (user instanceof Ngo) ? "NGO" : "User",
      userData: user
    }
    localStorage.setItem("user", JSON.stringify(value));
    this.userSubject.next(value);
  }


  getUser() {
    return this.userSubject.asObservable();
  }

  logOutUser() {
    localStorage.removeItem("user");
    this.userSubject.next(undefined);
  }
}
