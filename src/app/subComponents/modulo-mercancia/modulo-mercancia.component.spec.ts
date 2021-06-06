import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloMercanciaComponent } from './modulo-mercancia.component';

describe('ModuloMercanciaComponent', () => {
  let component: ModuloMercanciaComponent;
  let fixture: ComponentFixture<ModuloMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloMercanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
