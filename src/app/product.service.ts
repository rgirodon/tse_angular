import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  retrieveProducts(): Product[] {

    return [
      {id: 1, name : "TV OLED Philips", price: 899.99},
      {id: 2, name : "TV OLED Samsung", price: 999.99, discount: 10},
      {id: 3, name : "TV OLED LG", price: 1099.99},
    ];
  }

  retrieveProduct(id: number): Product {

    let result: Product = {id: 0, name: "", price: 0};

    if (id == 1) {
      result = {id: 1, name : "TV OLED Philips", price: 899.99};
    }
    else if(id == 2) {
      result =  {id: 2, name : "TV OLED Samsung", price: 999.99, discount: 10};
    }
    else if(id == 3) {
      result =  {id: 2, name : "TV OLED Samsung", price: 999.99};
    }

    return result;
  }
}
