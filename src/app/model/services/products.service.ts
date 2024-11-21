import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Court Vision', price: 50.0, image_url: './nike1.png', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Nike Court Vision', price: 50.0, image_url: './nike3.png', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Tênis Nike Downshifter', price: 50.0, image_url: './nike2.png', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
