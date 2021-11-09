import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      discount: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
