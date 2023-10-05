import { IModalState, modalFeature } from 'src/app/components/UI/modal/store/modal.reducer';
import { ICatalogueState, catalogueFeature } from "src/app/components/catalogue/store/catalogue.reducer"

export interface AppState {
  [modalFeature.name]:IModalState,
  [catalogueFeature.name]:ICatalogueState
}
