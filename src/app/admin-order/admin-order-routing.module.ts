import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { UserOrderDetailsComponent } from './components/user-order-details/user-order-details.component';

const routes: Routes = [
  {path:'', component:OrderHomeComponent,
    children:[
      {path:'userDetails', component:UserOrderDetailsComponent}
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOrderRoutingModule { }
