import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  retrieveProducts(): Product[] {

    return [
      {name : "TV OLED Philips", price: 899.99},
      {name : "TV OLED Samsung", price: 999.99, discount: 10.0},
      {name : "TV OLED LG", price: 1099.99},
    ];
  }
}
