
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signal, signal } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { IProduct } from 'src/models/IProduct';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for inputs', () => {
    expect(component.products()).toEqual([]);
    expect(component.selectedColor()).toEqual('');
  });

  it('should show more products when showMore is called', () => {
    const products = signal<IProduct[]>([
      { name: 'Product 1', price: '10', color: ['red'], description: '', 'image-thumb': '', 'image-preview': '', link: '' },
      { name: 'Product 2', price: '20', color: ['blue'], description: '', 'image-thumb': '', 'image-preview': '', link: '' },
      { name: 'Product 3', price: '30', color: ['green'], description: '', 'image-thumb': '', 'image-preview': '', link: '' },
    ]);
    component.products = products;
    component.showMore();
    expect(component.truncateValue()).toEqual(8);
    expect(component.moreToShow()).toEqual(false);
    expect(component.canShowOtherProducts()).toEqual(false);
  });

  it('should set truncateValue to default when setTruncateValueToDefault is called', () => {
    component.truncateValue = signal(6);
    component.setTruncateValueToDefault();
    expect(component.truncateValue()).toEqual(4);
  });

  it('should reset truncateValue when a list of products changes', () => {
    component.truncateValue = signal(8);
    component.products = signal<IProduct[]>([]);
    expect(component.truncateValue()).toEqual(4);
  });
});
