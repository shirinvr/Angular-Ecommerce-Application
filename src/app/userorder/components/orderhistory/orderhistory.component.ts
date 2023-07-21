import { Component } from '@angular/core';
import { OrderDataService } from '../../services/order-data.service';
import { OrderProduct } from '../../models/Orderproduct';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {
  public prevItems: OrderProduct[]; // Declare as an instance variable here

  
  public selectedOrderProduct: OrderProduct; // Add a variable to hold the selected ordered product data

  constructor(private orderservice: OrderDataService) { }

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('user_id'), 10); // Convert the string to a number
    console.log('User ID:', userId);

    this.orderservice.ordereditem(userId).subscribe(
      (response: OrderProduct[]) => { // Change the type to OrderProduct[]
        console.log('API Response:', response);
        this.prevItems = response; // Use "this" keyword to access the instance variable
      }
    );
  }

  // Function to open the modal and set the selected ordered product data
  openModal(orderProduct: OrderProduct) {
    this.selectedOrderProduct = orderProduct;
  }
}

