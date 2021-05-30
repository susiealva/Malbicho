import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCarritoComponent } from './modulo-carrito.component';

describe('ModuloCarritoComponent', () => {
  let component: ModuloCarritoComponent;
  let fixture: ComponentFixture<ModuloCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
