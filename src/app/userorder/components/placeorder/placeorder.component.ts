import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Allproducts } from 'src/app/landingpage/models/allproducts';
import { AllproductsService } from 'src/app/landingpage/services/allproducts.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit{
  product: Allproducts;

  constructor(
    private route: ActivatedRoute,
    private productService: AllproductsService,
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Assuming you are passing the product ID as a route parameter 'id'
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((res: Allproducts) => {
      this.product = res; // Store the fetched product details in 'placeorder'
    });
  }
}