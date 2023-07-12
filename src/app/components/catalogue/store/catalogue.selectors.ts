import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogueState, catalogueFeatureKey } from './catalogue.reducer';

export const selectCatalogueState = createFeatureSelector<CatalogueState>(catalogueFeatureKey);

export const getCatalogueProducts = createSelector(
  selectCatalogueState,
  (state) => state.products
);

export const getCatalogueLoading = createSelector(
  selectCatalogueState,
  (state) => state.onLoading
);

export const getCatalogueError = createSelector(
  selectCatalogueState,
  (state) => state.onError
);
