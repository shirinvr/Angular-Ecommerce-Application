import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { CategoryLandingComponent } from './components/category-landing/category-landing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCategoryComponent,
    DisplayCategoryComponent,
    CategoryLandingComponent
  ],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminCategoryModule { }
