import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './homeComponent/about/about.component';
import { HomeComponent } from './homeComponent/home/home.component';
import { FAQComponent } from './homeComponent/faq/faq.component';
import { LegislationComponent } from './homeComponent/legislation/legislation.component';
import { STEPModule } from './step/step.module';
import { NGOModule } from './ngo/ngo.module';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    HomeComponent,
    FAQComponent,
    LegislationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    STEPModule,
    NGOModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
