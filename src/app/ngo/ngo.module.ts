import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './ngo/ngo.component';
import { CriteriaComponent } from './ngoContent/criteria/criteria.component';
import { OrganisationComponent } from './ngoContent/organisation/organisation.component';
import { FundingnormsComponent } from './ngoContent/fundingnorms/fundingnorms.component';
import { RegisterComponent } from './ngoContent/register/register.component';
import { StatusComponent } from './ngoContent/status/status.component';
import { NgofaqComponent } from './ngoContent/ngofaq/ngofaq.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    NgoComponent, 
    CriteriaComponent, 
    OrganisationComponent, 
    FundingnormsComponent, 
    RegisterComponent, 
    StatusComponent, 
    NgofaqComponent, HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'ngo', component: NgoComponent },
      { path: 'ngo/criteria', component: CriteriaComponent },
      { path: 'ngo/organisation', component: OrganisationComponent },
      { path: 'ngo/funding', component: FundingnormsComponent },
      { path: 'ngo/registration', component: RegisterComponent },
      { path: 'ngo/ngofaq', component: NgofaqComponent },
      { path: 'ngo/ngostatus', component: StatusComponent },
    ])
  ]
})
export class NGOModule { }
