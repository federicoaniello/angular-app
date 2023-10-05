import { Component, ElementRef, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template:""
})
export class BaseComponent implements OnDestroy {
 unsubscriber$: Subject<void> = new Subject<void>();
 hasUnsavedChanges = false;
 
  constructor(@Inject('componentName') private componentName: string){
    this.componentName = componentName;
  }
  ngOnDestroy(): void {
      this.unsubscriber$.next();
      console.log("unsubscribed from " + this.componentName)
      this.unsubscriber$.complete();
  }
}
