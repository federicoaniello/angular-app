import { Component, Input, Signal, WritableSignal, computed, signal } from '@angular/core';
import { IProduct } from 'src/models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Input() selectedColor: string = "";

  truncateValue: WritableSignal<number> = signal(4);

  moreToShow: Signal<boolean> = computed(() => {
    console.log("products Length", this.productsLength());
    return this.productsLength() > this.truncateValue();
  });

  moreThan4: Signal<boolean> = computed(() => {
    return this.filteredProducts?.length > 4;

  });
  
    productsLength = computed(() => {
      if (this.selectedColor === null || this.selectedColor === "")
        return this.products?.length;
      return this.products?.filter((el) =>
        el.color.includes(this.selectedColor)
      ).length;
    });
  
    /**
     * Restituisce i prodotti filtrati per colore e per il truncateValue (multiplo di 4)
     */
    filteredProducts = computed(() => {
      if (this.selectedColor === null || this.selectedColor === "")
        return this.products?.slice(0, this.truncateValue());
      const filtered =
        this.products?.filter((el) => el.color.includes(this.selectedColor))
          .slice(0, this.truncateValue()) || [];
      return filtered;
    });
  
    //FUNCTIONS
    showMore = () => {
      this.truncateValue.update(val => val+4);
    }
}
