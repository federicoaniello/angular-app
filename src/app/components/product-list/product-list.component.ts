import { Component, Input, OnInit, WritableSignal, computed } from '@angular/core';
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
  @Input() products: Signal<IProduct[]> = signal([]);
  @Input() selectedColor: Signal<string> = signal('');

  constructor() {
    super("ProductListComponent");
  }
  
  truncateValue: WritableSignal<number> = signal(4);
  moreToShow: Signal<boolean> = computed(() => this.truncateValue() < this.filteredProducts()?.length);
  canShowOtherProducts: Signal<boolean> = computed(() => this.filteredProducts()?.length >= this.truncateValue() ) ;

  filteredProducts: Signal<IProduct[]> = computed(() => {
    if (!this.selectedColor() || this.selectedColor() === '') {
      return this.products();
    } else {
      return this.products()
      .filter((product) => product.color.includes(this.selectedColor()));
    }
  })

  showMore(): void {
    this.truncateValue.update(value => value + 4);
  }

  setTruncateValueToDefault() {
    this.truncateValue.set(4);
  }

  ngOnInit(): void {
  }


 
}
