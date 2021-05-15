import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPromocionComponent } from './modulo-promocion.component';

describe('ModuloPromocionComponent', () => {
  let component: ModuloPromocionComponent;
  let fixture: ComponentFixture<ModuloPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
