import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { catalogueFeature } from './catalogue.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as catalogueEffects from './catalogue.effects';
@NgModule({
  imports: [
    StoreModule.forFeature(catalogueFeature),
    EffectsModule.forFeature(catalogueEffects)
  ],
})
export class CatalogueStoreModule {}
