import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ModalComponent } from './components/UI/modal/modal.component';
import { ModalStoreModule } from 'src/store/modalStore/modal-store.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    ModalStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
