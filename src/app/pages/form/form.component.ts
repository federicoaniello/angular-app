import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  formSent = false;

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.setupFormChangeSubscription();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  private setupFormChangeSubscription(): void {
    this.form.valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(() => {
      this.hasUnsavedChanges = this.form.dirty && !this.form.valid;
    });
  }

  onSubmit(): void {
    this.formSent = true;
    console.log(this.form);
    if (!this.form.valid) {
      console.log('Form is not valid.');
    }
  }

  get formInstance(): any {
    return this.form.controls;
  }
}
