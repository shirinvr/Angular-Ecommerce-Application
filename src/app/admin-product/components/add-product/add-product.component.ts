import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminProductdata } from '../../models/product';
import { AdminProductcategoryService } from '../../services/admin-productcategory.service';
import { admincategory } from 'src/app/admin-category/models/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myform!: FormGroup;
  public categoryData: admincategory[] = [];
  constructor(private addproductService: AdminProductcategoryService, private router: Router) { }

  ngOnInit() {

    this.myform = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
      stock: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
    });

    this.loadCategories();

  }

  onCancel() {
    this.router.navigateByUrl('/adminLanding/product');
  }




  loadCategories() {
    this.addproductService.getCategory().subscribe(
      (data: admincategory[]) => {
        this.categoryData = data;
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }

  onSubmitForm(data: adminProductdata) {

    if (data) {
      const base64String = this.imageSrc.split(',')[1];

      const data: adminProductdata = {
        name: this.myform.value.name,
        categoryId: this.myform.value.categoryId,
        stock: this.myform.value.stock,
        price: this.myform.value.price,
        description: this.myform.value.description,
        image: base64String,
        id: 0
      };

      this.addproductService.addproduct(data).subscribe((response) => {
        console.log('added successfully', response);
        this.router.navigateByUrl('/adminLanding/product');
      });
    }

  }


  imageSrc: any = '';
  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }

}
