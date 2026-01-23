import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products: WritableSignal<Product[]> = signal([
    {name : "TV OLED Philips", price: 899.99},
    {name : "TV OLED Samsung", price: 999.99, discount: 10.0},
    {name : "TV OLED LG", price: 1099.99},
    {name : "TV OLED Panasonic", price: 999.99, discount: 5.0}
  ]);
}
