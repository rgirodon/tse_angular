import { Component, input, Input, InputSignal, OnInit } from '@angular/core';
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

  productToDisplay: Product = { name: "", price: 0};

  ngOnInit(): void {
    
    this.productToDisplay = this.product();
  }
}
