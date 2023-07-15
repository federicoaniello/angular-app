import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ModalComponent } from './components/UI/modal/modal.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { BaseModule } from './components/base/base.module';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BaseModule,
    HttpClientModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
