import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpOneComponent } from './fp-one.component';

describe('FpOneComponent', () => {
  let component: FpOneComponent;
  let fixture: ComponentFixture<FpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
