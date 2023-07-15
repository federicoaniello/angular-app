import { ActivatedRouteSnapshot } from '@angular/router';


export const leaverouteGuard = ( component: {hasUnsavedChanges:boolean},next: ActivatedRouteSnapshot ) => {
  return component?.hasUnsavedChanges ? window.confirm("Hai un form in sospeso. Vuoi lasciare la sezione?") : true;
};