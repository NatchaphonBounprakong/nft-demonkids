import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionRoadmapComponent } from './lion-roadmap.component';

describe('LionRoadmapComponent', () => {
  let component: LionRoadmapComponent;
  let fixture: ComponentFixture<LionRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionRoadmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LionRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
