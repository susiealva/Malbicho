import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloProductoComponent } from './modulo-producto.component';

describe('ModuloProductoComponent', () => {
  let component: ModuloProductoComponent;
  let fixture: ComponentFixture<ModuloProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
