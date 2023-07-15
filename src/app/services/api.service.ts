import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/models/IProduct';
import { catalogueActions } from '../components/catalogue/store/catalogue.actions';
import { getCatalogueProducts } from '../components/catalogue/store/catalogue.selectors';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 http = inject(HttpClient);
 store = inject(Store)
  constructor() { }


  download(api: string):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`/assets${api}`);
  }

  fetchProductData(api: string): Observable<IProduct[]>{
    this.store.dispatch(catalogueActions.startingFetchData({api}));
    return this.store.select(getCatalogueProducts);

  }
}
