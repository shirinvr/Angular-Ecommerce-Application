import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { admincategory } from '../../models/category';
import { AdminCategoryService } from '../../services/admin-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  myform!:FormGroup;

  constructor(private addcategoryService: AdminCategoryService, private router: Router) {}
  
  ngOnInit(){

    this.myform=new FormGroup ({
        name:new FormControl(null,[Validators.required]),
        description:new FormControl(null,[Validators.required]),
        image:new FormControl(null,[Validators.required]),
      });

  }

  onCancel(){
    this.router.navigateByUrl('/adminLanding/category');
  }



  onSubmitForm(data: admincategory) {
    this.router.navigateByUrl('/adminLanding/category');
    // console.log(this.myform);
    
    if (data) {
      const base64String = this.imageSrc.split(',')[1];

      const data: admincategory = {
        name: this.myform.value.name,
        description: this.myform.value.description,
        image: base64String,
        id: 0
      };
      this.addcategoryService.addCategory(data).subscribe((response)=>{
        console.log('added successfully', response)
      })
    }
  }

  imageSrc: any= '';
  onFileChanged(event : any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }

}