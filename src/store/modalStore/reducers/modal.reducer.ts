import { createReducer, on } from '@ngrx/store';
import { modalActions } from '../actions/modal.actions';
import { State } from 'src/store/state.global';

const modalFeatureKey = 'modal-store';

const initialState: State = {
  modal: null
}


const modalReducer = createReducer(
  initialState,
  on(modalActions.resetData, state => ({modal:null})),
  //on(modalActions.getModalData, state => ({ ...state, away: state.away + 1 })),
  on(modalActions.sendModalData, (state, {modalData}) => ({modal:modalData}))
);

export {modalFeatureKey, modalReducer}
