import { createReducer, on } from '@ngrx/store';
import { modalActions } from './modal.actions';
import { IProduct } from 'src/models/IProduct';

const modalFeatureKey = 'modal-store';

interface State {
  modal: IProduct | null;
}

const initialState: State = {
  modal: null
}


 const modalReducer = createReducer(
  initialState,
  on(modalActions.resetData, state => ({modal:null})),
  on(modalActions.sendModalData, (state, {modalData}) => ({modal:modalData}))
);

export {State, modalFeatureKey, modalReducer}
