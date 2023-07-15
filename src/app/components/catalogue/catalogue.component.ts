import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { signal, WritableSignal, Signal, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ApiService } from 'src/app/services/api.service';
import { toCapitalized } from '../../../utils/utils';
import { ILinksData } from 'src/models/ILinksData';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogueComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  select_color: WritableSignal<string> = signal('');
  links_data: ILinksData[] = [];
  api!: string;
  colors: WritableSignal<string[]> = signal([]);
  toCapitalized = toCapitalized;

  constructor() {
    this.apiService.fetchLinksData().subscribe((links_data) => {
      this.links_data = links_data;
      const default_api = links_data.find((tab) => tab.isDefault);
      if (default_api) {
        this.apiService.api = default_api.api;
      }
    });

    this.apiService.api.pipe(takeUntilDestroyed()).subscribe((api: string) => {
      this.api = api;
    });
  }

  ngOnInit(): void {}

  onChange(event: any) {
    this.select_color.set(event.target.value);
  }

  setApi(api: string) {
    this.apiService.api = api;
  }

  onColorsReceived(cl: string[]) {
    this.colors.set(cl);
    this.select_color.set('');
  }
}
