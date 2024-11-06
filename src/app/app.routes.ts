import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: '', 
        component: ProductsListComponent,
        children: [
            {path: 'products/:id', component: ProductComponent }
        ] 
    }    
];