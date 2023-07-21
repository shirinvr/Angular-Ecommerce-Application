import { Injectable } from '@angular/core';
import { adminProductdata } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
    productData : adminProductdata[] =[
    // {
    //   id:1,
    //   image:"../../assets/images/Rectangle 5.png",
    //   category: 'Skin Care',
    //   productName:'ASUS X144SUV',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // },
    // {
    //   id:2,
    //   image:"../../assets/images/Rectangle 5-1.png",
    //   category: 'Laptops & PC',
    //   productName:'Iphone 14',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // },
    // {
    //   id:3,
    //   image:"../../assets/images/Rectangle 5-2.png",
    //   category: 'Smartphones',
    //   productName:'ASUS Zenbook',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // },
    // {
    //   id:4,
    //   image:"../../assets/images/Rectangle 5-3.png",
    //   category: 'Fashion',
    //   productName:'SAMSUNG A51',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // },
    // {
    //   id:5,
    //   image:"../../assets/images/Rectangle 5-4.png",
    //   category: 'Electronics',
    //   productName:'Baju Wanita',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // },
    
    // {
    //   id:6,
    //   image:"../../assets/images/Rectangle 5-5.png",
    //   category: 'Lifestyle',
    //   productName:'Tas Kece',
    //   productDesc:'lorem ipsum decorum consectetur',
    //   amount:2800
    // }
    
    

  ]

  // getProducts(){
  //   return this.productData;
  // }
  getProducts(){
    return this.http.get(`${this.apiUrl}/Product/allProducts`);
  }

  addproduct(data:adminProductdata){
    return this.http.post(`${this.apiUrl}/Product/ProductInsert`,data);
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.apiUrl}/Product/ProductDelete/id=${id}`)
  }
}
