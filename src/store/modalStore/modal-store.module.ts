import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { modalReducer,modalFeatureKey } from './reducers/modal.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(modalFeatureKey,modalReducer)
  ],
})
export class ModalStoreModule {}
