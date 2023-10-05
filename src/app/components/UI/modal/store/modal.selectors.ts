import { createSelector } from '@ngrx/store';
import { modalFeature } from './modal.reducer';

export const modalSelector = createSelector(
    modalFeature.selectModal,
    modalFeature.selectModalState,
    (modal) => ({ modal })
);