import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { userRegistration } from '../../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signupservice: SignupService){}

  myForm!:FormGroup;

  ngOnInit(){
    this.myForm= new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required, Validators.pattern('[0-9]{10}')]),
    password:new FormControl(null,[Validators.required]),
    address:new FormControl(null, [Validators.required]),
    });
 
   }
   onSubmit(data:userRegistration){
    this.signupservice.userSignup(data).subscribe(
      response => {
        console.log('Signup successful!', response);
        // Handle the successful response here
      }
   );
  
  }

}
