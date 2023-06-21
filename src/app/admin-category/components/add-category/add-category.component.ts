import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/admin-product/services/product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  myform!:FormGroup;

  constructor(private addproductService: ProductService, private router: Router)
  {
    
  }
  ngOnInit(){

    this.myform=new FormGroup ({
        pname:new FormControl(null,[Validators.required]),
        pdes:new FormControl(null,[Validators.required]),
        pimg:new FormControl(null,[Validators.required]),
      });

  }

  onCancel(){
    this.router.navigateByUrl('/adminLanding/category');
  }



  onSubmitForm() {
    this.router.navigateByUrl('/adminLanding/category');
    console.log(this.myform);
    const inputdata = {
      pname: this.myform.value.pname,
      pdes: this.myform.value.pdes,
      pimg:this.myform.value.pimg
    };
 
  }
 
}
