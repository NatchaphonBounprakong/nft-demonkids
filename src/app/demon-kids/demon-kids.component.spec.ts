import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonKidsComponent } from './demon-kids.component';

describe('DemonKidsComponent', () => {
  let component: DemonKidsComponent;
  let fixture: ComponentFixture<DemonKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
