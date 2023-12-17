import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { QualityAndPoliciesComponent } from './pages/quality-and-policies/quality-and-policies.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact-us', component: ContactComponent},
  {path:'quality-and-policies', component: QualityAndPoliciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
