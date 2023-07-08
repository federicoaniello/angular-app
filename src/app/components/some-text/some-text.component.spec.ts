import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTextComponent } from './some-text.component';

describe('SomeTextComponent', () => {
  let component: SomeTextComponent;
  let fixture: ComponentFixture<SomeTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeTextComponent]
    });
    fixture = TestBed.createComponent(SomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
