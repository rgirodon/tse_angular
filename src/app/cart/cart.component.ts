import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  shoppingCart: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    
    this.resetCart();
  }

  private resetCart() {

    this.shoppingCart = this.cartService.getCart();
  }

  removeFromCart(product: Product):void {

    this.cartService.removeFromCart(product);

    this.resetCart();
  }
}
