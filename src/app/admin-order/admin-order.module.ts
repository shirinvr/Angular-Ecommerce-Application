import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrderRoutingModule } from './admin-order-routing.module';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserOrderDetailsComponent } from './components/user-order-details/user-order-details.component';


@NgModule({
  declarations: [
    OrderHomeComponent,
    UserOrdersComponent,
    UserOrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminOrderRoutingModule
  ]
})
export class AdminOrderModule { }
