import { createSelector } from "@ngrx/store";
import { State } from "src/store/state.global";

export const modalState = (state: State) => state.modal;


export const selectModalState = createSelector(
  modalState,
  (state) => state
);
