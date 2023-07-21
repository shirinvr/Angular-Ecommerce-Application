import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path:'landing',loadChildren:()=>import('./landingpage/landingpage.module').then(m=>m.LandingpageModule)},
 { path:'',redirectTo:'landing',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
