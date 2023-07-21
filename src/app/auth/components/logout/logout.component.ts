import { Component } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private logOutservice:LogoutService,private loginservice:LoginService , private router:Router){}
  logout(): void {
    this.logOutservice.logout();
    this.router.navigateByUrl('/landing');
    // Additional logic after logout if needed
  }

  oncancel() {
    // this.loginservice.userLogin().subscribe((response: any) => {
    //   localStorage.setItem('user_id', response.Data.user_id);
    //   localStorage.setItem('token', response.Data.Token);
  
    //   console.log('token', response.Data.Token);
    //   const role = response.Data.role;
  
    //   localStorage.setItem('role', role);
  
    //   if (role === 'Admin') {
    //     this.router.navigateByUrl('/adminLanding');
    //   } else {
    //     this.router.navigateByUrl('/userlanding');
    //   }
    // });
  }
}
