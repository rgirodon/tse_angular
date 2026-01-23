import { Component, input, Input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {  

  product: InputSignal<Product> = input({ name: "", price: 0});

  productToDisplay: WritableSignal<Product> = signal({ name: "", price: 0});

  ngOnInit(): void {
    
    this.productToDisplay.set(this.product());
  }
}
