import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { OrderProduct } from '../models/Orderproduct';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) { }

  orderitem(order:OrderProduct){    
    return this.http.post(`${this.apiUrl}/Order/Additem`,order);
  }

  ordereditem(userId:number){
    // console.log('id is', userId);
    return this.http.get(`${this.apiUrl}/Order/allOrderuserid?id=${userId}`);
  }

  getProductsbyid(id:number){
    return this.http.get(`${this.apiUrl}/Product/ProductById?id=${id}`);
  }
  deleteMyOrder(id:number){
    return this.http.delete(`${this.apiUrl}/Order/Delete?id=${id}`)
  }
}
