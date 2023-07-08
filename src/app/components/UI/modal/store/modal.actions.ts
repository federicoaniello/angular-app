import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IProduct } from "src/models/IProduct";

export const modalActions = createActionGroup({
  source:"Modal Action",
  events:{
    "Reset data": emptyProps(),
    "Send Modal Data": props<{modalData:IProduct}>(),
    //"Get Modal Data":emptyProps()
  }
  })
