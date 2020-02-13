import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { AboutusComponent } from './stepContent/aboutus/aboutus.component';
import { GuidelinesComponent } from './stepContent/guidelines/guidelines.component';
import { TrainingsectorComponent } from './stepContent/trainingsector/trainingsector.component';
import { RegistrationComponent } from './stepContent/registration/registration.component';
import { StatusComponent } from './stepContent/status/status.component';
import { FaqComponent } from './stepContent/faq/faq.component';



@NgModule({
  declarations: [StepComponent, AboutusComponent, GuidelinesComponent, TrainingsectorComponent, RegistrationComponent, StatusComponent, FaqComponent],
  imports: [
    CommonModule
  ]
})
export class STEPModule { }
