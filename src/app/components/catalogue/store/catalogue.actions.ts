import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IProduct } from "src/models/IProduct";

export const catalogueActions = createActionGroup({
    source:"Catalogue Action",
    events:{
      "Starting fetch data": props<({api: string})>(),
      "fetch data success":props<{data:IProduct[]}>(),
      "fetch data fail": props<{error:any}>(),
    }
    })
