import { Component, inject } from '@angular/core';
import { modalActions } from './components/UI/modal/store/modal.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  store = inject(Store)

  onh = () =>{
    this.store.dispatch(modalActions.sendModalData({modalData:{
      "image-thumb": "/thumbs/product-14.jpg",
      "image-preview": "http://img.edilportale.com/product-thumbs/b_relax-azea-200510-relc6355420.jpg",
      "name": "AZEA",
      "description": "SDormeuse capitonné in tessuto",
      "price": "€ 1.699,09",
      "old-price": "€ 1.788,52",
      "discount": "-5%",
      "link": "http://www.archiproducts.com/it/prodotti/azea/dormeuse-capitonne-in-tessuto-relax_200510",
      "color": ["grey"]
    }}))

  }
}
