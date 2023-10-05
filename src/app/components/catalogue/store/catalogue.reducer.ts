import { createFeature, createReducer, on } from "@ngrx/store";
import { IProduct } from "src/models/IProduct";
import { catalogueActions } from "./catalogue.actions";


export interface ICatalogueState {
  products: IProduct[];
  onLoading: boolean;
  onError: boolean;
}

 const initialState: ICatalogueState = {
  products: [],
  onLoading: false,
  onError: false
};

export const catalogueFeature = createFeature({
  name:'catalogue',
  reducer:createReducer(
    initialState,
    on(catalogueActions.startingFetchData, (state) => ({
      ...state,
      products:[],
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
  )
}
);
