import { Component, input, Input, InputSignal, OnInit } from '@angular/core';
import { Product } from '../product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: InputSignal<Product> = input({ id:0, name: "", price: 0});

  productToDisplay: Product = { id:0, name: "", price: 0};

  ngOnInit(): void {
    this.productToDisplay = this.product();
  }
}
