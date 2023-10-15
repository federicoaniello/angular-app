import { Component, EventEmitter, Input, Output, OnInit, WritableSignal } from '@angular/core';
import { signal, inject, Signal, computed, effect } from '@angular/core';
import { exhaustMap, mergeMap, switchMap, takeUntil } from 'rxjs/operators';

import { IProduct } from 'src/models/IProduct';
import { colorUtility } from 'src/utils/utils';
import { ApiService } from 'src/app/services/api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BaseComponent } from '../base/base.component';
import { ICatalogueState } from '../catalogue/store/catalogue.reducer';
import { catalogueActions } from '../catalogue/store/catalogue.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss'],
})
export class DownloadListComponent extends BaseComponent implements OnInit {
  @Output() onColorsGathered = new EventEmitter<string[]>();

  private readonly apiService = inject(ApiService);
  jsonData: IProduct[] = [];
  colors: string[] = [];
  loading: boolean = false;
  error: boolean = false;

  constructor(){
    super();

  }
  ngOnInit() {
    this.apiService.api.pipe(
      switchMap(api => this.apiService.fetchProductData()),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (products: IProduct[]) => {
        this.jsonData = products;
        this.colors = colorUtility(products);
        this.onColorsGathered.emit(this.colors);
      },
      error: (err: any) => {
        console.error(err);
        this.error = true;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
