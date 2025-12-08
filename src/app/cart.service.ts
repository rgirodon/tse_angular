import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Product[] = [];

  constructor() { 
  }

  getCart():Product[] {

    return this.shoppingCart;
  }

  addToCart(product: Product):void {

    this.shoppingCart.push(product);
  }

  private findInCart(product: Product):number {

    let index: number = this.shoppingCart.findIndex(item => item.id === product.id);

    return index;
  }

  removeFromCart(product: Product):void {

    let index: number = this.findInCart(product);

    if (index != -1) {

      this.shoppingCart.splice(index, 1);
    }
  }
}
