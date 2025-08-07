import { Injectable } from '@angular/core';
import { categories } from '../sampleData/categories.data';
import { Category } from '../types/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:5001/productcategories');
  }
}
