import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionHypehogsComponent } from './lion-hypehogs.component';

describe('LionHypehogsComponent', () => {
  let component: LionHypehogsComponent;
  let fixture: ComponentFixture<LionHypehogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionHypehogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LionHypehogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
