import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsComponent } from './homecontent/faqs/faqs.component';
import { LegislationComponent } from './homecontent/legislation/legislation.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Home', component: AppComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  {path: 'faq', component:FaqsComponent},
  {path:'Legislation',component: LegislationComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
