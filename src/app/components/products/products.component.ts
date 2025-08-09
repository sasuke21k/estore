import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsStoreItem } from '../home/services/product/products.storeitem';

@Component({
  selector: 'app-products',
  imports: [CommonModule,RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  constructor(public productStoreItem:ProductsStoreItem) {
    
 }
}
