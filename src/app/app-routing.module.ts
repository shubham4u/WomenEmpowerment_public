import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './homeComponent/about/about.component';
import { HomeComponent } from './homeComponent/home/home.component';
import { FAQComponent } from './homeComponent/faq/faq.component';
import { LegislationComponent } from './homeComponent/legislation/legislation.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: 'legislation', 
    component: LegislationComponent  
  },
  {
    path: 'faq', 
    component: FAQComponent  
  },
  {
    path: 'signin', 
    component: SigninComponent  
  },
  {
    path: 'signup', 
    component: SignupComponent  
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      {
    preloadingStrategy: PreloadAllModules
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
