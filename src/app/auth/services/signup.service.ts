import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userRegistration } from '../models/signup';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  userSignup(data: userRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/userRegistration`, data);
  }

}
