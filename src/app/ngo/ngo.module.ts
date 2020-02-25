import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './ngo/ngo.component';
import { CriteriaComponent } from './ngoContent/criteria/criteria.component';
import { OrganisationComponent } from './ngoContent/organisation/organisation.component';
import { FundingnormsComponent } from './ngoContent/fundingnorms/fundingnorms.component';
import { RegisterComponent } from './ngoContent/register/register.component';
import { StatusComponent } from './ngoContent/status/status.component';
import { NgofaqComponent } from './ngoContent/ngofaq/ngofaq.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { OptionComponent } from './ngoContent/register/ngodashboard/option/option.component';
import { FacilityComponent } from './ngoContent/register/ngodashboard/facility/facility.component';
import { TrainingprogrammeComponent } from './ngoContent/register/ngodashboard/trainingprogramme/trainingprogramme.component';
import { LoginComponent } from './ngoContent/login/login.component';

const routes: Routes = [
  { path: 'ngo', component: NgoComponent },
  { path: 'ngo/criteria', component: CriteriaComponent },
  { path: 'ngo/organisation', component: OrganisationComponent },
  { path: 'ngo/funding', component: FundingnormsComponent },
  { path: 'ngo/registration', component: RegisterComponent },
  { path: 'ngo/ngofaq', component: NgofaqComponent },
  { path: 'ngo/ngostatus', component: StatusComponent },
  {path:  'ngo/login',component:LoginComponent},
  { path: 'ngo/registration/option', component:OptionComponent },
  { path: 'ngo/registration/trprogramme', component:TrainingprogrammeComponent},
  { path: 'ngo/registration/facility', component:FacilityComponent},
]

@NgModule({
  declarations: [
    NgoComponent, 
    CriteriaComponent, 
    OrganisationComponent, 
    FundingnormsComponent, 
    RegisterComponent, 
    LoginComponent,
    StatusComponent, 
    NgofaqComponent, HeaderComponent, OptionComponent, FacilityComponent, TrainingprogrammeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class NGOModule { }
