import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { leaverouteGuard } from 'src/app/guards/leaveroute.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canDeactivate: [leaverouteGuard],
  },
];

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class FormModule {}
