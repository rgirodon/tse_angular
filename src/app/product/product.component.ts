import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: WritableSignal<Product> = signal({id: 0, name: "", price: 0});

  private productService: ProductService = inject(ProductService);

  private route = inject(ActivatedRoute);

  constructor() {
  }

  ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.retrieveProduct(id).subscribe((product: Product) => {

      this.product.set(product);
    });
  }
}
