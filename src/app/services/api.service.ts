import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { IProduct } from 'src/models/IProduct';
import { catalogueActions } from '../components/catalogue/store/catalogue.actions';
import { links_data } from 'src/assets/data/data';
import { ILinksData } from 'src/models/ILinksData';
import { ICatalogueState } from '../components/catalogue/store/catalogue.reducer';
import { getCatalogue, getProducts } from '../components/catalogue/store/catalogue.selectors';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly links: ILinksData[] = links_data;
  private readonly apiData$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private store: Store<ICatalogueState>
  ) {}

  get api(): Observable<string> {
    return this.apiData$.asObservable();
  }

  set api(apiEndpoint: string) {
    this.apiData$.next(apiEndpoint);
  }

  fetchLinksData(): Observable<ILinksData[]> {
    return of(this.links).pipe(take(1));
  }

  download(): Observable<IProduct[]> {
    const apiUrl = `/assets${this.apiData$.getValue()}`;
    return this.http.get<IProduct[]>(apiUrl);
  }

  fetchProductData(): Observable<IProduct[]> {
    const apiEndpoint = this.apiData$.getValue();
    this.store.dispatch(catalogueActions.startingFetchData({ api: apiEndpoint }));
    return this.store.select<IProduct[]>(getProducts).pipe(filter(products => products.length > 0));
  }
}
