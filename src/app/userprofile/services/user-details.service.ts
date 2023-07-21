import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserDetailsid(user_id: number) {
    return this.http.get(`${this.apiUrl}/User/userDetailsByID?id=${user_id}`);
  }
}
