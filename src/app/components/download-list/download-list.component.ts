import { takeUntil } from 'rxjs';
import { Component, EventEmitter, Input, Output, WritableSignal, signal, effect, OnInit, inject, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/models/IProduct';
import { colorUtility } from 'src/utils/utils';
import { BaseComponent } from '../base/base.component';
import { catalogueActions } from '../catalogue/store/catalogue.actions';
import { catalogueFeatureKey } from '../catalogue/store/catalogue.reducer';

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
  store = inject(Store);

  constructor(){
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(catalogueActions.startingFetchData({api:this.api}));
    this.store.select(catalogueFeatureKey).pipe(takeUntil(this.unsubscriber$)).subscribe(({products,onError,onLoading}) => {
      this.jsonData.set(products)
      this.onColorsGathered.emit(this.colors())
    }
      )
  }
}
