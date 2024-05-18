import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { QualityAndPoliciesComponent } from './pages/quality-and-policies/quality-and-policies.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { CareersComponent } from './pages/careers/careers.component';
import { StaffServicesComponent } from './pages/staff-services/staff-services.component';
import { UnavailableComponent } from './pages/unavailable/unavailable.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutComponent},
  {path:'About-Us', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'Facility-Management', component: ServicesComponent},
  {path:'contact-us', component: ContactComponent},
  {path:'quality-and-policies', component: QualityAndPoliciesComponent},
  {path:'properties', component: HomeComponent},//PropertiesComponent
  {path:'careers', component: CareersComponent},
  {path:'Join-Us', component: CareersComponent},
  {path:'staff-and-services', component: StaffServicesComponent},
  {path:'Call-Centre', component: StaffServicesComponent},
  {path:'not-found', component: UnavailableComponent},
  {path:'**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
