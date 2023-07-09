import { Injectable, NgModule } from '@angular/core';
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
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatalogueStoreModule } from './components/catalogue/store/catalogue-store.module';
import { EffectsModule } from '@ngrx/effects';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    SomeTextComponent,
    MainComponent,
    BaseComponent,
    ProductItemComponent,
    ProductListComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
    ModalStoreModule,
    CatalogueStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
