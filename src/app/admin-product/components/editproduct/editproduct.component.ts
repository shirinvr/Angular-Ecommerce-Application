import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  myform!:FormGroup;

  constructor(private addproductService: ProductService, private router: Router)
  {
    
  }
  ngOnInit(){

    this.myform=new FormGroup ({
        pname:new FormControl(null,[Validators.required]),
        pcat:new FormControl(null,[Validators.required]),
        pstock:new FormControl(null,[Validators.required]),
        pprice:new FormControl(null,[Validators.required]),
        pdes:new FormControl(null,[Validators.required]),
        pimg:new FormControl(null,[Validators.required]),
      });

  }



  onEditForm(){
    this.router.navigateByUrl('/adminLanding/product');
    console.log(this.myform);
    const inputdata = {
      pname: this.myform.value.pname,
      pcat: this.myform.value.pcat,
      pstock: this.myform.value.pstock,
      pprice: this.myform.value.pprice,
      pdes: this.myform.value.pdes,
      pimg:this.myform.value.pimg
    };
  }


  
  onCancel(){
    this.router.navigateByUrl('/adminLanding/product');
  }
}
