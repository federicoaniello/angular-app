import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { modalFeature } from './modal.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(modalFeature)
  ],
})
export class ModalStoreModule {}
