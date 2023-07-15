import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';

import { IProduct } from 'src/models/IProduct';
import { catalogueActions } from '../components/catalogue/store/catalogue.actions';
import { getCatalogueProducts } from '../components/catalogue/store/catalogue.selectors';
import { links_data } from 'src/assets/data/data';
import { ILinksData } from 'src/models/ILinksData';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private links = links_data;
  private api_data: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  get api(): Observable<string> {
    return this.api_data.asObservable().pipe(distinctUntilChanged());
  }

  set api(_api: string) {
    this.api_data.next(_api);
  }

  fetchLinksData(): Observable<ILinksData[]> {
    return of(this.links).pipe(take(1));
  }

  download(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/assets${this.api_data.getValue()}`);
  }

  fetchProductData(): Observable<IProduct[]> {
    this.store.dispatch(catalogueActions.startingFetchData({ api: this.api_data.getValue() }));
    return this.store.select(getCatalogueProducts);
  }
}
