import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { AboutusComponent } from './stepContent/aboutus/aboutus.component';
import { GuidelinesComponent } from './stepContent/guidelines/guidelines.component';
import { TrainingsectorComponent } from './stepContent/trainingsector/trainingsector.component';
import { RegistrationComponent } from './stepContent/registration/registration.component';
import { StatusComponent } from './stepContent/status/status.component';
import { FaqComponent } from './stepContent/faq/faq.component';
import { RouterModule } from '@angular/router';
let STEPModule = class STEPModule {
};
STEPModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            StepComponent,
            AboutusComponent,
            GuidelinesComponent,
            TrainingsectorComponent,
            RegistrationComponent,
            StatusComponent,
            FaqComponent
        ],
        imports: [
            CommonModule,
            RouterModule.forRoot([
                { path: 'step', component: StepComponent },
                { path: 'step/stepabout', component: AboutusComponent },
                { path: 'step/guidelines', component: GuidelinesComponent },
                { path: 'step/training', component: TrainingsectorComponent },
                { path: 'step/registration', component: RegistrationComponent },
                { path: 'step/stepfaq', component: FaqComponent },
            ])
        ]
    })
], STEPModule);
export { STEPModule };
//# sourceMappingURL=step.module.js.map