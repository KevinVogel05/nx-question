import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpThreeComponent } from './fp-three.component';

describe('FpThreeComponent', () => {
  let component: FpThreeComponent;
  let fixture: ComponentFixture<FpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
