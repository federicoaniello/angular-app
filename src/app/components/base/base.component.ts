import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template:""
})
export class BaseComponent implements OnDestroy {
 unsubscriber$: Subject<void> = new Subject<void>();
 hasUnsavedChanges = false;

  constructor(){
  }

  ngOnDestroy(): void {
      this.unsubscriber$.next();
      console.log("unsubscribed")
      this.unsubscriber$.complete();
  }
}
