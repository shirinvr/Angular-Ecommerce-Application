import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Allproducts } from 'src/app/landingpage/models/allproducts';
import { AllproductsService } from 'src/app/landingpage/services/allproducts.service';
import { OrderDataService } from '../../services/order-data.service';
import { OrderProduct } from '../../models/Orderproduct';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  order: Allproducts;

  constructor(
    private route: ActivatedRoute,
    private productService: AllproductsService,
    private orderDataService: OrderDataService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Assuming you are passing the product ID as a route parameter 'id'
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (res: Allproducts) => {
        this.order = res;
        console.log('Product Data:', this.order);
      }
    );
  }

  orderProduct() {
  
    const userId = localStorage.getItem('user_id');    // Get the user_id from local storage
  
    // Create the OrderProduct object with the required data
    const order: OrderProduct = {
      ...this.order, // Spread the properties of Allproducts into OrderProduct
      user_id: parseInt(userId, 10),
      product_id: this.order.id,
      productName: this.order.name,
      discription: this.order.description,
      productImage: this.order.image,
      quantity: 1,
      total_price: this.order.price,
    };
  
    // Send the order data via the API
    this.orderDataService.orderitem(order).subscribe(
      (response: OrderProduct) => {
        console.log('Order placed successfully', response);
        this.navigate();
      },
      (error) => {
        console.log('Error placing order', error);
      }
    );
  }

  navigate(){
    this.router.navigateByUrl('/landing');
  }
}