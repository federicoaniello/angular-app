import { ChangeDetectionStrategy, Component, Input, OnInit, WritableSignal, computed, inject } from '@angular/core';
import { Signal, signal, effect } from '@angular/core';
import { IProduct } from 'src/models/IProduct';
import { BaseComponent } from '../base/base.component';
import { Observable, combineLatest, distinctUntilChanged, forkJoin, map, merge, takeUntil } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ICatalogueState } from '../catalogue/store/catalogue.reducer';
import { getCatalogue, getFilteredProducts, getProducts, getSelectedColor } from '../catalogue/store/catalogue.selectors';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  @Input() selectedColor = '';
  private readonly store = inject(Store);
  private readonly api = inject(ApiService);
  selectedColor$: Observable<string>;
  filteredProducts: IProduct[] = [];
    constructor() {
    super();
    this.selectedColor$ = this.store.select(getSelectedColor).pipe(distinctUntilChanged());
    this.store.select(getFilteredProducts).subscribe(products => this.filteredProducts = products);
    
    
    merge(this.api.api, this.selectedColor$).pipe(takeUntil(this.unsubscriber$)).subscribe((v) => {
      this.setTruncateValueToDefault();
    })


  }

  truncateValue: number = 4;
  moreToShow(): boolean { return this.truncateValue < this.filteredProducts.length };
  canShowOtherProducts(): boolean { return this.filteredProducts?.length >= this.truncateValue };


  showMore(): void {
    this.truncateValue += 4;
  }

  setTruncateValueToDefault() {
    this.truncateValue = 4;
  }

  ngOnInit(): void {
  }

}
