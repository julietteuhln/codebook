import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = `${environment.firebaseConfig.databaseURL}/products`;

  constructor(private http: HttpClient) { }

  getProducts(): Promise<any> {
    return this.http.get<any>(`${this.apiURL}.json`).toPromise();
  }

  getProductById(id: string): Promise<any> {
    return this.http.get<any>(`${this.apiURL}/${id}.json`).toPromise();
  }

  addProduct(product: any): Promise<any> {
    return this.http.post<any>(`${this.apiURL}.json`, product).toPromise();
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}.json`, product);
  }

  deleteProduct(id: string): Promise<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}.json`).toPromise();
  }

}
