import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTwoComponent } from './sp-two.component';

describe('SpTwoComponent', () => {
  let component: SpTwoComponent;
  let fixture: ComponentFixture<SpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
