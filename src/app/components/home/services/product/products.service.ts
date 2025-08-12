import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Product } from '../../types/products.type';

@Injectable()
export class ProductsService {

  private readonly baseURL = 'http://localhost:5001/products';

  constructor(private http:HttpClient) { }

 getAllProducts(filters?:{
  maincategoryid?:number;
  subcategoryid?:number;
  keyword?: string;
 }): Observable<Product[]> {

  let params = new HttpParams();
  if(filters?.maincategoryid!=null){
    params = params.set('maincategoryid', filters.maincategoryid.toString());
  }
  if(filters?.subcategoryid!=null){
    params = params.set('subcategoryid', filters.subcategoryid.toString());
  }
  if(filters?.keyword){
    params = params.set('keyword', filters.keyword);
  }
    return this.http.get<Product[]>(this.baseURL, { params });
  }
}

