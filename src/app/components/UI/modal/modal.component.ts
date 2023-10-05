import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { IProduct } from 'src/models/IProduct';
import { modalActions } from './store/modal.actions';
import { IModalState } from './store/modal.reducer';
import { modalSelector } from './store/modal.selectors';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends BaseComponent implements OnInit {
  store: Store<IModalState> = inject<Store<IModalState>>(Store);
  modalData!: IProduct | null;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(modalSelector)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe({
        next: (state) => {
          this.modalData = state.modal;
        },
      });
  }

  close(event: any) {
    if (event?.target?.closest('.modal-body')) return;
    this.store.dispatch(modalActions.resetData());
  }
}
