import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: Product = {id: 0, name: "", price: 0};

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      let id: number = Number(params['id']);

      this.productService.retrieveProduct(id).subscribe((product: Product) => {

        this.product = product;
      });
    });
  }

  addToCart():void {

    this.cartService.addToCart(this.product);
  }
}
