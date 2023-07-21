import { Component, Input } from '@angular/core';
import { AllproductsService } from '../../services/allproducts.service';
import { Allproducts } from '../../models/allproducts';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

  public allproduct: Allproducts[] = [];
  public name: string;
  public searchForm: FormGroup; // Create the FormGroup instance


  constructor(private productService: AllproductsService, categoryservice: CategoryService) { 
    this.productService.getProducts().subscribe(
      (response: Allproducts[]) => {
        console.log(response)
        this.allproduct = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.searchForm = new FormGroup({
      searchInput: new FormControl()
    });
  }

  searchprod() {
    const searchValue = this.searchForm.get('searchInput').value;
    this.productService.searchproducts(searchValue).subscribe(
      (res: Allproducts[]) => {
        this.allproduct = res; // Update the allproduct array with the fetched data
        console.log(res);
      },
      (error) => {
        console.log('Error occurred while searching products:', error);
      }
    );
  }

}
