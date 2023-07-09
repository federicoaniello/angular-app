import { State, modalFeatureKey } from "src/app/components/UI/modal/store/modal.reducer"
import { CatalogueState, catalogueFeatureKey } from "src/app/components/catalogue/store/catalogue.reducer"


export interface AppState {
  [modalFeatureKey]:State,
  [catalogueFeatureKey]:CatalogueState
}
