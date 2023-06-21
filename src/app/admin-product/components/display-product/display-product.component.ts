import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {
  public productData: any[] = []; // Initialize as an empty array
  // or
  constructor(public productService: ProductService, private router: Router) { 
    this.productService.getProducts()// Initialize in the constructor
  }


}
