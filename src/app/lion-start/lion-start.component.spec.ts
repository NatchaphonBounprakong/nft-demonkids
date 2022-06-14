import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionStartComponent } from './lion-start.component';

describe('LionStartComponent', () => {
  let component: LionStartComponent;
  let fixture: ComponentFixture<LionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
