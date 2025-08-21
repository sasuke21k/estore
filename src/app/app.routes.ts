import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsGalleryComponent } from './components/home/products-gallery/products-gallery.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { CartComponent } from './components/home/cart/cart.component';

export const routes: Routes = [
    {
       path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path:'cart',
        component: CartComponent,
      }
    ],
    },
    { path: '', redirectTo: '/home/products', pathMatch: 'full' },
    {path: '**', component:NotFoundComponent}
];
