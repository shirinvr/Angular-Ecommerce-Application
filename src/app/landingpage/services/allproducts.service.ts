import { Injectable } from '@angular/core';
import { Allproducts } from '../models/allproducts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {
  
  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
    allproduct : Allproducts[] =[ ]

  getProducts(){
    return this.http.get<Allproducts[]>(`${this.apiUrl}/Product/allProducts`);
  }
  
  getProductById(id: number) {
    console.log('id loaded',id);
    return this.http.get(`${this.apiUrl}/Product/ProductById?id=${id}`);
    
  }

  searchproducts(name:string){
    return this.http.get(`${this.apiUrl}/Product/ProductSearch?proName=${name}`);
  }

  searchproductsByCategoryAndName(id:number,searchValue:any){
    return this.http.post(`${this.apiUrl}/category/searchbycategory`, id);
  }
}
