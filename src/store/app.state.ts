import { IModalState, modalFeature } from 'src/app/components/UI/modal/store/modal.reducer';
import { CatalogueState, catalogueFeatureKey } from "src/app/components/catalogue/store/catalogue.reducer"

export interface AppState {
  [modalFeature.name]:IModalState,
  [catalogueFeatureKey]:CatalogueState
}
