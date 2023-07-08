import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ModalComponent } from './components/UI/modal/modal.component';
import { ModalStoreModule } from 'src/app/components/UI/modal/store/modal-store.module';
import { HeaderComponent } from './components/UI/header/header.component';
import { SomeTextComponent } from './components/some-text/some-text.component';
import { MainComponent } from './views/main/main.component';
import { BaseComponent } from './components/base/base.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    SomeTextComponent,
    MainComponent,
    BaseComponent,
    ProductItemComponent
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
