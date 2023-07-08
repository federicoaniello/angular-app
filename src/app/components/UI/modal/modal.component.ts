import { Component, Inject, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  store = inject(Store);
  modalData$: Observable< = this.store.subscribe({
    next(data) {
        console.log(data)
    },
  })
  // const emits = defineEmits(["close"]);
  // const modalStore = useModalStore();
  // const { getModalData } = storeToRefs(modalStore);


  constructor(){

  }


  ngOnInit(): void {

  }


  close = (event) => {
    if (event.target.closest(".modal-body")) return;
    modalStore.resetModal();
    emits("close");
  }
}
