import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { allCategory } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public categoryData: allCategory[] = [];

  constructor(private categoryService: CategoryService) { 
    this.categoryService.getCategory().subscribe(
      (response: allCategory[]) => {
        console.log(response)
        this.categoryData = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
