import { Component, Input } from '@angular/core';
import { Signal, signal } from '@angular/core';
import { IProduct } from 'src/models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Signal<IProduct[]> = signal([]);
  @Input() selectedColor: Signal<string> = signal('');

  truncateValue: number = 4;


  moreToShow(): boolean {
    return this.productsLength() > this.truncateValue;
  }

  productsLength(): number {
    if (!this.selectedColor || this.selectedColor() === '') {
      return this.products().length;
    }
    return this.products()
      .filter((product) => product.color.includes(this.selectedColor()))
      .length;
  }

  filteredProducts(): IProduct[] {
    if (!this.selectedColor || this.selectedColor() === '') {
      return this.products().slice(0, this.truncateValue);
    } else {
      return this.products()
        .filter((product) => product.color.includes(this.selectedColor()))
        .slice(0, this.truncateValue);
    }
  }

  showMore(): void {
    this.truncateValue += 4;
  }

  moreThan4(): boolean {
    return this.filteredProducts().length > 4;
  }
}
