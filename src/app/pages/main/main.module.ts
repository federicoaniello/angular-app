import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CatalogueStoreModule } from 'src/app/components/catalogue/store/catalogue-store.module';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';
import { DownloadListComponent } from 'src/app/components/download-list/download-list.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { SomeTextComponent } from 'src/app/components/some-text/some-text.component';
import { FormsModule } from '@angular/forms';
import { BaseModule } from 'src/app/components/base/base.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    MainComponent,
    SomeTextComponent,
    ProductItemComponent,
    ProductListComponent,
    CatalogueComponent,
    DownloadListComponent
],
imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CatalogueStoreModule,
    FormsModule,
    BaseModule
    
  ],
})
export class MainModule {}
