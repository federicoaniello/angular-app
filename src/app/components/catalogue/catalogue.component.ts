import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { toCapitalized } from '../../../utils/utils';
import { ILinksData } from 'src/models/ILinksData';
import { BaseComponent } from '../base/base.component';
import { takeUntil, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { catalogueActions } from './store/catalogue.actions';
import { getSelectedColor } from './store/catalogue.selectors';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogueComponent extends BaseComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly apiService = inject(ApiService);

  selectColor: string = "";
  linksData: ILinksData[] = [];
  api!: string;
  colors: string[] = [];
  toCapitalized = toCapitalized;


  constructor() {
    super();
    this.store.select(getSelectedColor).pipe(takeUntil(this.unsubscriber$)).subscribe((color) => {
      this.selectColor = color;
    });
  }
  
  ngOnInit(): void {
    this.apiService.fetchLinksData().pipe(takeUntil(this.unsubscriber$)).subscribe((linksData) => {
      this.linksData = linksData;
      const default_api = linksData.find((tab) => tab.isDefault);
      if (default_api) {
        this.apiService.api = default_api.api;
      }
    });

    this.apiService.api.pipe(takeUntil(this.unsubscriber$)).subscribe((api: string) => {
      this.api = api;
    });
  }

  onChange(event: Event) {
    const ev = event.target as HTMLSelectElement;
    this.store.dispatch(catalogueActions.setColorSelected({ color: ev.value }));

  }

  setApi(api: string) {
    this.apiService.api = api;
  }

  onColorsReceived(colorsArray: string[]) {
    this.colors = (colorsArray);
    this.store.dispatch(catalogueActions.setColorSelected({ color: '' }));
  }
}
