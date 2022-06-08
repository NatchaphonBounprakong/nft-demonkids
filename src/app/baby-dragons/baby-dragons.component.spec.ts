import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyDragonsComponent } from './baby-dragons.component';

describe('BabyDragonsComponent', () => {
  let component: BabyDragonsComponent;
  let fixture: ComponentFixture<BabyDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyDragonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
