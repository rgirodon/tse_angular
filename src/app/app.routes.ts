import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    { 
        path: 'products',
        component: ProductsListComponent,
        children: [
            {path: ':id', component: ProductComponent }
        ] 
    }    
];