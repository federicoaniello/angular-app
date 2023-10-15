import { ChangeDetectionStrategy, Component, Input, OnInit, WritableSignal, computed } from '@angular/core';
import { Signal, signal, effect } from '@angular/core';
import { IProduct } from 'src/models/IProduct';
import { BaseComponent } from '../base/base.component';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  @Input() products: IProduct[] = [];
  @Input() selectedColor = '';

  constructor() {
    super();
  }

  truncateValue: number = 4;
  moreToShow(): boolean { return this.truncateValue < this.filteredProducts()?.length };
  canShowOtherProducts(): boolean { return this.filteredProducts()?.length >= this.truncateValue };

  filteredProducts(): IProduct[] {
    if (!this.selectedColor || this.selectedColor === '') {
      return this.products;
    } else {
      return this.products
        .filter((product) => product.color.includes(this.selectedColor));
    }
  };

  showMore(): void {
    this.truncateValue += 4;
  }

  setTruncateValueToDefault() {
    this.truncateValue = 4;
  }

  ngOnInit(): void {
  }

}
