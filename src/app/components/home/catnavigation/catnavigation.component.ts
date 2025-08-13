import { Component, output, signal } from '@angular/core';
import { Category } from '../types/category';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';


@Component({
  selector: 'app-catnavigation',
  imports: [RouterLink],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css'
})
export class CatnavigationComponent {
 
 readonly categoryClicked = output<number>();
 displayOptions = signal(true);

  constructor(public categoryStore: CategoriesStoreItem,
    private router: Router
  ){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.displayOptions.set(event.url === '/home/products');
    });
  }
  
 onCategoryClick(mainCategory: Category) {
  this.categoryClicked.emit(mainCategory.id);
}
}
