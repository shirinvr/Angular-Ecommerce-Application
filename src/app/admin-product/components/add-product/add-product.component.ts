import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
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

  onCancel(){
    this.router.navigateByUrl('/adminLanding/product');
  }






  onSubmitForm() {
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
 
}
