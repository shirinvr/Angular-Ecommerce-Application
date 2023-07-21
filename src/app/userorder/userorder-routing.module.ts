import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyorderComponent } from './components/myorder/myorder.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  {path:'myorder',component:MyorderComponent},
  {path:'orderhistory', component:OrderhistoryComponent},
  {path:'placeorder/:id', component:PlaceorderComponent},
  {path:'shipping/:id', component:ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserorderRoutingModule { }
