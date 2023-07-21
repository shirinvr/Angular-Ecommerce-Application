import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Add this method to check if the user is logged in
  isLoggedIn(): boolean {
    // Check if the user id and token are present in localStorage
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    return !!userId && !!token; // Return true if both userId and token exist, otherwise false
  }
}
