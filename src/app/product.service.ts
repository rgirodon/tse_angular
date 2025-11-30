import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

/*
  private products: Product[] = [
    {id: 1, name : "TV OLED Philips", price: 899.99},
    {id: 2, name : "TV OLED Samsung", price: 999.99, discount: 10},
    {id: 3, name : "TV OLED LG", price: 1099.99},
  ]
*/

  constructor(private http: HttpClient) { }

  retrieveProducts(): Observable<Product[]> {
    /*
    return this.products;
    */

    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  retrieveProduct(id: number): Observable<Product> {

    return this.http.get<Product>(`http://localhost:8080/products/${id}`);

    /*
    let result: Product = {id: 0, name: "", price: 0};

    for ( let product of this.products) {

      if (product.id == id) {

        result = product;

        break;
      }
    }

    return result;
    */
  }
}
