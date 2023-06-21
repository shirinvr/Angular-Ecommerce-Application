import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';

const landing: Routes = [
    {path:'',component:LandingHomeComponent},
    {path:'home',component:LandingHomeComponent},
    {path:'userOrder',loadChildren:()=>import('../userorder/userorder.module').then(m=>m.UserorderModule)},
   
];

@NgModule({
  imports: [RouterModule.forChild(landing)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }