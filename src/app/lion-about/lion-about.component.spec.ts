import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionAboutComponent } from './lion-about.component';

describe('LionAboutComponent', () => {
  let component: LionAboutComponent;
  let fixture: ComponentFixture<LionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
