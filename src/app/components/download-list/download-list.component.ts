import { takeUntil } from 'rxjs';
import { Component, EventEmitter, Input, Output, WritableSignal, signal, effect, OnInit, inject, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/models/IProduct';
import { colorUtility } from 'src/utils/utils';
import { BaseComponent } from '../base/base.component';
import { catalogueActions } from '../catalogue/store/catalogue.actions';
import { catalogueFeatureKey } from '../catalogue/store/catalogue.reducer';
import { getCatalogueProducts } from '../catalogue/store/catalogue.selectors';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss']
})
export class DownloadListComponent extends BaseComponent implements OnInit {
  @Input() selectedColor: string = '';
  @Input() api: string = '';
  @Output() onColorsGathered = new EventEmitter();

  jsonData: WritableSignal<IProduct[]> = signal([]);
  colors: Signal<string[]> = computed(() => colorUtility(this.jsonData()));
  apiService = inject(ApiService);
  loading: boolean = false;
  error:boolean = false;
  constructor(){
    super();
  }

  ngOnInit(): void {
    this.apiService.fetchProductData(this.api).pipe(takeUntil(this.unsubscriber$)).subscribe(
      {
        next:(products) => {
          this.jsonData.set(products);
          this.onColorsGathered.emit(this.colors())
        },
        error:(err) => {console.error(err); this.error = true},
        complete: () => {this.loading = false;}
      }

    )
  }
}
