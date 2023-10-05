import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/models/IProduct';
import { IModalState } from '../UI/modal/store/modal.reducer';
import { modalActions } from '../UI/modal/store/modal.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item!: IProduct; 
    store: Store<IModalState> = inject<Store<IModalState>>(Store)

  ngOnInit(): void {
  }
    openModal(product : IProduct) {
      this.store.dispatch(modalActions.sendModalData({modalData:product}))
      //emits("onProductChosen", product);
    };
}
