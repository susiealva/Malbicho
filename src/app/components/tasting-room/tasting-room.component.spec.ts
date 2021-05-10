import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingRoomComponent } from './tasting-room.component';

describe('TastingRoomComponent', () => {
  let component: TastingRoomComponent;
  let fixture: ComponentFixture<TastingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastingRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
