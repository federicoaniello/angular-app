import { State, modalFeatureKey } from "src/app/components/UI/modal/store/modal.reducer"


export interface AppState {
  [modalFeatureKey]:State
}
