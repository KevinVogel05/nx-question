import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpOneComponent } from './sp-one.component';

describe('SpOneComponent', () => {
  let component: SpOneComponent;
  let fixture: ComponentFixture<SpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
