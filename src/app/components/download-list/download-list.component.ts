import { Component, EventEmitter, Input, Output, OnInit, WritableSignal } from '@angular/core';
import { signal, inject, Signal, computed, effect } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';

import { IProduct } from 'src/models/IProduct';
import { colorUtility } from 'src/utils/utils';
import { ApiService } from 'src/app/services/api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BaseComponent } from '../base/base.component';
import { ICatalogueState } from '../catalogue/store/catalogue.reducer';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss'],
})
export class DownloadListComponent extends BaseComponent implements OnInit {
  @Input() selectedColor = '';
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
      next: (catalogueState: ICatalogueState) => {
        this.jsonData = catalogueState.products;
        this.colors = colorUtility(this.jsonData);
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
