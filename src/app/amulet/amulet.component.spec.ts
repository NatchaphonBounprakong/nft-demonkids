import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmuletComponent } from './amulet.component';

describe('AmuletComponent', () => {
  let component: AmuletComponent;
  let fixture: ComponentFixture<AmuletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmuletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
