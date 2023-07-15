import { AppState } from "src/store/app.state";

export const getModalData = (store:AppState) => store["modal-store"].modal;