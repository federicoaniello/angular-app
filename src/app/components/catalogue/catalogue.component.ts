import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { signal, WritableSignal, inject } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { toCapitalized } from '../../../utils/utils';
import { ILinksData } from 'src/models/ILinksData';
import { BaseComponent } from '../base/base.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogueComponent extends BaseComponent implements OnInit {

  private readonly apiService = inject(ApiService);

  selectColor: WritableSignal<string> = signal('');
  linksData: ILinksData[] = [];
  api!: string;
  colors: WritableSignal<string[]> = signal([]);
  toCapitalized = toCapitalized;

  constructor() {
    super("CatalogueComponent");
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

  onChange(event: any) {
    this.selectColor.set(event.target.value);
  }

  setApi(api: string) {
    this.apiService.api = api;
  }

  onColorsReceived(cl: string[]) {
    this.colors.set(cl);
    this.selectColor.set('');
  }
}
