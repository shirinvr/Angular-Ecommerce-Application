import { Injectable } from '@angular/core';
import { allCategory } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategory(): Observable<allCategory[]> {
    return this.http.get<allCategory[]>(`${this.apiUrl}/category/allcategory`);
  }

}
