import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserorderRoutingModule } from './userorder-routing.module';
import { MyorderComponent } from './components/myorder/myorder.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MyorderComponent,
    PlaceorderComponent,
    ShippingComponent,
    OrderhistoryComponent
  ],
  imports: [
    CommonModule,
    UserorderRoutingModule,
    SharedModule
  ]
})
export class UserorderModule { }
