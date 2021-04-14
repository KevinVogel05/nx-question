import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpTwoComponent } from './fp-two.component';

describe('FpTwoComponent', () => {
  let component: FpTwoComponent;
  let fixture: ComponentFixture<FpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
