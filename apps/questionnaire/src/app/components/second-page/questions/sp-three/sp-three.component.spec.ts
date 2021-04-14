import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpThreeComponent } from './sp-three.component';

describe('SpThreeComponent', () => {
  let component: SpThreeComponent;
  let fixture: ComponentFixture<SpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
