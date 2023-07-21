import { Component } from '@angular/core';
import { AdminCategoryService } from '../../services/admin-category.service';
import { admincategory } from '../../models/category';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent {

  public categoryData: admincategory[] = [];

  constructor(private categoryService: AdminCategoryService) { 
    this.categoryService.getCategory().subscribe(
      (response: admincategory[]) => {
        console.log(response)
        this.categoryData = response; // Assign the received data to categoryData
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  deleteCat(id:number){
    this.categoryService.deleteCategory(id).subscribe((res)=>{
      alert("deleted");
    })
  }
}
