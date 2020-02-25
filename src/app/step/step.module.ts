import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { AboutusComponent } from './stepContent/aboutus/aboutus.component';
import { GuidelinesComponent } from './stepContent/guidelines/guidelines.component';
import { TrainingsectorComponent } from './stepContent/trainingsector/trainingsector.component';
import { RegistrationComponent } from './stepContent/registration/registration.component';
import { StatusComponent } from './stepContent/status/status.component';
import { FaqComponent } from './stepContent/faq/faq.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OptionComponent } from './stepContent/registration/registrationDashBoard/option/option.component';
import { TrainingprogrammeComponent } from './stepContent/registration/registrationDashBoard/trainingprogramme/trainingprogramme.component';
import { FacilityComponent } from './stepContent/registration/registrationDashBoard/facility/facility.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgoComponent } from './stepContent/ngo/ngo.component';

const routes: Routes = [
  { path: 'step', component: StepComponent },
  { path: 'step/stepabout', component: AboutusComponent },
  { path: 'step/guidelines', component: GuidelinesComponent },
  { path: 'step/training', component: TrainingsectorComponent },
  { path: 'step/registration', component: RegistrationComponent },
  { path: 'step/stepfaq', component: FaqComponent },
  { path: 'step/registration/option', component:OptionComponent },
  { path: 'step/registration/trprogramme', component:TrainingprogrammeComponent},
  { path: 'step/registration/facility', component:FacilityComponent},
]

@NgModule({
  declarations: [
    StepComponent, 
    AboutusComponent, 
    GuidelinesComponent, 
    TrainingsectorComponent, 
    RegistrationComponent, 
    StatusComponent,
    FaqComponent, 
    HeaderComponent, OptionComponent, TrainingprogrammeComponent, FacilityComponent, NgoComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ]
})
export class STEPModule { }
