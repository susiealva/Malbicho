import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwrapperComponent } from './productwrapper.component';

describe('ProductwrapperComponent', () => {
  let component: ProductwrapperComponent;
  let fixture: ComponentFixture<ProductwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
