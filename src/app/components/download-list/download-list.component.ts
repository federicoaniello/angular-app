import { Component, EventEmitter, Input, Output, OnInit, WritableSignal } from '@angular/core';
import { signal, inject, Signal, computed, effect } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { IProduct } from 'src/models/IProduct';
import { colorUtility } from 'src/utils/utils';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss'],
})
export class DownloadListComponent implements OnInit {
  @Input() selectedColor: Signal<string> = signal('');
  @Output() onColorsGathered = new EventEmitter();

  private readonly apiService = inject(ApiService);

  jsonData: WritableSignal<IProduct[]> = signal([]);
  colors: Signal<string[]> = computed(() => colorUtility(this.jsonData()));
  loading: boolean = false;
  error: boolean = false;

  ngOnInit() {
    this.apiService.api.pipe(
      switchMap(api => this.apiService.fetchProductData())
    ).subscribe({
      next: (products: IProduct[]) => {
        this.jsonData.set(products);
        this.onColorsGathered.emit(this.colors());
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
