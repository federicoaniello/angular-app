import { CommonModule } from "@angular/common";
import { Injectable, NgModule } from "@angular/core";
import { HeaderComponent } from "../UI/header/header.component";
import { ModalComponent } from "../UI/modal/modal.component";
import { BaseComponent } from "./base.component";
import { ModalStoreModule } from "../UI/modal/store/modal-store.module";

@Injectable({providedIn: 'root'})
export class ServiceNameService {

}
@NgModule({
  declarations: [
    ModalComponent,
    HeaderComponent,
    BaseComponent,
  ],
  imports: [
    CommonModule,
    ModalStoreModule
  ],
  exports:[
    ModalComponent,
    HeaderComponent,
    BaseComponent
  ],
  providers: [],
})
export class BaseModule { }