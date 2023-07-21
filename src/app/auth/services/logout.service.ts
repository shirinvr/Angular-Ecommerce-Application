import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  logout(): void {
    // Clear or remove session data
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
     // Example: Removing a token from local storage
    // ... Other session-related cleanup
  }
}
