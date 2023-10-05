import { createSelector } from '@ngrx/store';
import { catalogueFeature } from './catalogue.reducer';


export const getCatalogue = createSelector(
  catalogueFeature.selectProducts,
  catalogueFeature.selectOnLoading,
  catalogueFeature.selectOnError,
  (products,onLoading,onError) => ({products,onLoading,onError})
);