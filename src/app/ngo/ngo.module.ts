import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './ngo/ngo.component';
import { CriteriaComponent } from './ngoContent/criteria/criteria.component';
import { OrganisationComponent } from './ngoContent/organisation/organisation.component';
import { FundingnormsComponent } from './ngoContent/fundingnorms/fundingnorms.component';
import { RegisterComponent } from './ngoContent/register/register.component';
import { StatusComponent } from './ngoContent/status/status.component';
import { NgofaqComponent } from './ngoContent/ngofaq/ngofaq.component';



@NgModule({
  declarations: [NgoComponent, CriteriaComponent, OrganisationComponent, FundingnormsComponent, RegisterComponent, StatusComponent, NgofaqComponent],
  imports: [
    CommonModule
  ]
})
export class NGOModule { }
