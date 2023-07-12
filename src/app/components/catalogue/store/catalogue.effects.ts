import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, switchMap } from "rxjs";
import { catalogueActions } from "./catalogue.actions";
import { ApiService } from "src/app/services/api.service";


export const fetchProducts = createEffect(
    (actions$ = inject(Actions), api = inject(ApiService)) => {
      return actions$.pipe(
        ofType(catalogueActions.startingFetchData),
        switchMap((action) =>
          api.download(action.api).pipe(
            map((products) => catalogueActions.fetchDataSuccess({ data:products })),
            catchError((error) =>
              of(catalogueActions.fetchDataFail({error}))
            )
          )
        )
      );
    },
    { functional: true },
  );
