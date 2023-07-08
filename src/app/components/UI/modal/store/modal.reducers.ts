import { createSelector } from '@ngrx/store';
import { State, modalFeatureKey } from './modal.reducer';
import { AppState } from 'src/store/app.state';

const selectFeature = (state: AppState) => state[modalFeatureKey];
export const getModalData = createSelector(
  selectFeature,
  (state: State) => state.modal
);
