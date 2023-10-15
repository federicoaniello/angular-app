import { Component, ElementRef, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template:""
})
export class BaseComponent implements OnDestroy {
 unsubscriber$: Subject<void> = new Subject<void>();
 hasUnsavedChanges = false;
  componentName: string;

  constructor(){
    this.componentName = this.constructor.name;
  }
  
  ngOnDestroy(): void {
      this.unsubscriber$.next();
      console.log("unsubscribed from " + this.componentName)
      this.unsubscriber$.complete();
  }
}
