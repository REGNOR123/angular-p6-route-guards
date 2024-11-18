import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { DashboardGuardGuard } from './dashboard-guard.guard';


const routes: Routes = [
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [DashboardGuardGuard]},  // here we are guarding the route but authentiaction
  {path:'contacts', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'terms&conditions', component: TermsAndConditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
