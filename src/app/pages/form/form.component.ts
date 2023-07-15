import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/components/base/base.component';

interface FormInstance {
  name: FormControl<string>;
  password: FormControl<string>;
  checkbox: FormControl<boolean>;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseComponent implements OnInit {
  private fb = inject(FormBuilder);
  form!: FormGroup<FormInstance>;
  formSent = false;

  constructor() {
    super();
    
  }
  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: [false, Validators.requiredTrue],
    });

    this.form.valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(() => {
      this.hasUnsavedChanges = this.form.dirty && !this.form.valid;
    })

  }

  onSubmit() {
    this.formSent = true;
    console.log(this.form);
    if (!this.form.valid) {
      console.log('form not valid.');
    }
  }

  get formInstance(): any {
    return this.form.controls;
  }
}
