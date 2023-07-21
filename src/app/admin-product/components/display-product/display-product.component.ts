import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminProductdata } from '../../models/product';
import { AdminProductcategoryService } from '../../services/admin-productcategory.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {

  allproduct: adminProductdata[] = []; // Initialize as an empty array
  public name: string;
  public adminsearchForm: FormGroup;
  
  constructor(private displayproductService: AdminProductcategoryService, private formBuilder: FormBuilder,) { 
    this.displayproductService.getProducts().subscribe(
      (response: adminProductdata[]) => {
        console.log(response)
        this.allproduct = response; // Assign the received data to categoryData

      },
      (error) => {
        console.log('error', error);
      }
    );

    this.adminsearchForm = this.formBuilder.group({
      adminsearchInput: [''] // Set the default value for the control here (if needed)
    });
  }

  deleteProdct(id:number){
    this.displayproductService.deleteProduct(id).subscribe((res)=>{
      alert("deleted")
      // console.log('deleted', res)
    })
  }

  searchprod() {
    const searchValue = this.adminsearchForm.get('adminsearchInput').value;
    this.displayproductService.searchproducts(searchValue).subscribe(
      (res: adminProductdata[]) => {
        this.allproduct = res; // Update the allproduct array with the fetched data
        console.log(res);
      },
      (error) => {
        console.log('Error occurred while searching products:', error);
      }
    );
  }


}
