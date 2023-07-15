import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { AppState } from 'src/store/app.state';
import { IProduct } from 'src/models/IProduct';
import { modalActions } from './store/modal.actions';
import { getModalData } from './store/modal.selectors';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends BaseComponent implements OnInit {
  store: Store<AppState> = inject(Store);
  modalData!: IProduct | null;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(getModalData)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe({
        next: (el) => {
          this.modalData = el;
        },
      });
  }

  close(event: any) {
    if (event?.target?.closest('.modal-body')) return;
    this.store.dispatch(modalActions.resetData());
  }
}
