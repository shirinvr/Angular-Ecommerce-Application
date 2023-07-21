import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginservice: LoginService, private router: Router) { }

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });

  }

  onSubmit(data: login) {
    this.loginservice.userLogin(data).subscribe((response: any) => {
      console.log('login successful!', response);

      localStorage.setItem('user_id', response.Data.user_id);
      localStorage.setItem('token', response.Data.Token);

      console.log('token', response.Data.Token);
      const role = response.Data.role;

      localStorage.setItem('role', role)
      if (role === 'Admin') {
        this.router.navigateByUrl('/adminLanding');
      } else {
        this.router.navigateByUrl('/userlanding');
      }


    });

  }

}
