
import { createFeature, createReducer, on } from '@ngrx/store';
 
import {modalActions} from './modal.actions';
import { IProduct } from 'src/models/IProduct';
 
export interface IModalState {
  modal: IProduct | null;
}
 
const initialState: IModalState = {
  modal: null,
};
 
export const modalFeature = createFeature({
  name: 'modal',
  reducer: createReducer(
    initialState,
    on(modalActions.resetData, () => ({modal:null})),
    on(modalActions.sendModalData, (state, { modalData }) => ({...state,modal:modalData}))
  ),
});
