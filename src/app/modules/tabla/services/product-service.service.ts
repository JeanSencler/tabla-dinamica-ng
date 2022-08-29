import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productUrl !: string;

  constructor(private http: HttpClient) {
    this.productUrl = "http://localhost:8080/v2/products";
  }
  //Obteniendo todos los productos{GET}
  public findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }
  //Obteniendo por id{GET}
  findProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  //Guardando nuevo productos{POST}
  public save(product: Product) {
    return this.http.post<Product>(this.productUrl, product);
  }
  //Actualizando productos{PUT}
  public update(product: Product) {
    return this.http.put<Product>(this.productUrl, product);
  }
  //Borrar por id
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

}
