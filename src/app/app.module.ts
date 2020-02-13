import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './homeContent/about/about.component';
import { StepComponent } from './homeContent/step/step.component';
import { NgoComponent } from './homeContent/ngo/ngo.component';
import { ContactComponent } from './homeContent/contact/contact.component';
import { FaqComponent } from './homeContent/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    StepComponent,
    NgoComponent,
    ContactComponent,
    FaqComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
