import { Component } from '@angular/core';
import { AdminProductcategoryService } from '../../services/admin-productcategory.service';
import { adminCategory } from '../../models/category';

@Component({
  selector: 'app-admin-product-category',
  templateUrl: './admin-product-category.component.html',
  styleUrls: ['./admin-product-category.component.css']
})
export class AdminProductCategoryComponent {

  public categoryData: adminCategory[] = []; // Initialize as an empty array

  constructor(private categoryService: AdminProductcategoryService) { 
    this.categoryService.getCategory().subscribe(
      (response: adminCategory[]) => {
        console.log(response)
        this.categoryData = response; // Assign the received data to categoryData
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  
}
