import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToughLionsComponent } from './tough-lions.component';

describe('ToughLionsComponent', () => {
  let component: ToughLionsComponent;
  let fixture: ComponentFixture<ToughLionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToughLionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToughLionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
