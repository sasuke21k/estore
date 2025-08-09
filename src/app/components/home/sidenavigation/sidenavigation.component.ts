import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css'
})
export class SidenavigationComponent {

  faAngleDown = faAngleDown;

  private categoryStore = inject(CategoriesStoreItem);

  readonly categories = this.categoryStore.categories;

  getCategories(parentCategoriesId?:number):Category[]{
    return this.categories().filter
    (category => parentCategoriesId? category.parent_category_id===parentCategoriesId 
      : category.parent_category_id===null);
  }

}
