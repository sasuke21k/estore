import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css'
})
export class SidenavigationComponent {

  faAngleDown = faAngleDown;
  categories :Category [] = [];

  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories)=>
    {
      this.categories = categories;
    });
  }

  getCategories(parentCategoriesId?:number):Category[]{
    return this.categories.filter
    (category => parentCategoriesId? category.parent_category_id===parentCategoriesId : category.parent_category_id===null);
  }

}
