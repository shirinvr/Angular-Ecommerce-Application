import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminCategory } from 'src/app/admin-product/models/category';
import { environment } from 'src/environments/environment.development';
import { admincategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {
  apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) { }

  categoryData : adminCategory[] =[ ]

  getCategory(){
    return this.http.get(`${this.apiUrl}/category/allcategory`);
  }

  addCategory(data:admincategory){
    return this.http.post(`${this.apiUrl}/Category/CategoryInsert`,data);
  }

  deleteCategory(id:number){
    return this.http.delete(`${this.apiUrl}/category/CategoryDelete?id=${id}`)
  }
  
}
  