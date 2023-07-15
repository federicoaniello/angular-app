import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
export class FormComponent implements OnInit {
  private fb = inject(FormBuilder);
  form!: FormGroup<FormInstance>;
  formSent = false;
  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: [false, Validators.requiredTrue],
    });
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
