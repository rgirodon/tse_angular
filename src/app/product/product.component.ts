import { Component, OnInit, signal, WritableSignal } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.product.set(this.productService.retrieveProduct(id));
  }
}
