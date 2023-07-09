import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/models/IProduct";
import { catalogueActions } from "./catalogue.actions";

export const catalogueFeatureKey = "catalogue-store";

export interface CatalogueState {
  products: IProduct[];
  onLoading: boolean;
  onError: boolean;
}

 const initialState: CatalogueState = {
  products: [],
  onLoading: false,
  onError: false
};

const catalogueReducer = createReducer(
  initialState,
  on(catalogueActions.startingFetchData, (state) => ({
    ...state,
    onLoading: true,
    onError: false
  })),
  on(catalogueActions.fetchDataFail, (state) => ({
    ...state,
    products: [],
    onLoading: false,
    onError: true
  })),
  on(catalogueActions.fetchDataSuccess, (state, { data }) => ({
    ...state,
    products: data,
    onLoading: false,
    onError: false
  }))
);

export { catalogueReducer };
