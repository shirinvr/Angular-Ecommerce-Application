import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { orderproduct } from '../../models/user-order';
import { OrderdataService } from '../../services/orderdata.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {

  userorder() {
    this.router.navigateByUrl('/userDetails');
  }

  data: orderproduct[] = [];

  constructor(private orderService: OrderdataService, private router: Router) {
    this.orderService.displayOrder().subscribe((res) => {
      this.data = res
    })
  }
  deleteorder(id:number){
    this.orderService.deleteOrder(id).subscribe((res)=>{
      if(res){
        console.log('prod deleted', res);
      }
    })
  }
}
