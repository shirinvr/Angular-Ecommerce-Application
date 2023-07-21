import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { login } from '../models/login';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  userLogin(data: login): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/login`, data)
    
  }

  getToken(): string {
    return localStorage.getItem('token'); // Return an empty string if the token is null or undefined
  }

}
