import { createSelector } from '@ngrx/store';
import { catalogueFeature } from './catalogue.reducer';


export const getCatalogue = createSelector(
  catalogueFeature.selectProducts,
  catalogueFeature.selectOnLoading,
  catalogueFeature.selectOnError,
  catalogueFeature.selectColorSelected,
  (products,onLoading,onError,colorSelected) => ({products,onLoading,onError,colorSelected})
);

export const getProducts = createSelector(
  catalogueFeature.selectProducts,
  (products) => products
)

export const getSelectedColor = createSelector(
  catalogueFeature.selectColorSelected,
  (colorSelected) => colorSelected
)

export const getFilteredProducts = createSelector(
  catalogueFeature.selectFilteredProducts,
  (filteredProducts) => filteredProducts
)