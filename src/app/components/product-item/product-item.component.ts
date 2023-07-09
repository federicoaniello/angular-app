import { Component, Input, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/models/IProduct';
import { State } from '../UI/modal/store/modal.reducer';
import { modalActions } from '../UI/modal/store/modal.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() item!: IProduct; 
    store = inject(Store<State>)

  
    openModal(product : IProduct) {
      console.log("selected Item: ", product);
      this.store.dispatch(modalActions.sendModalData({modalData:product}))
      //emits("onProductChosen", product);
    };
}
