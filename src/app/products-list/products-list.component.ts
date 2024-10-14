import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products.push(...this.productService.retrieveProducts());
  }
}
