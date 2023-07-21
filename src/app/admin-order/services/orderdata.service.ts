import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/user-order';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {

  private apiUrl = environment.apiUrl;

 

  constructor(private http : HttpClient) { }

  displayOrder(){
    return this.http.get<Order[]>(`${this.apiUrl}/Order/allOrder`)
  }

  deleteOrder(id: number){
    return this.http.delete(`${this.apiUrl}/Order/Delete?id=${id}`)

  }
}
