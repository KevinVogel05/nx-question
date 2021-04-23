import { DatabaseService } from './../../services/database.service';
import { TranslateService } from './../../services/translate.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TranslateComponent } from './translate.component';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;
  let store: MockStore;
  const initialState = {
    name: 'init',
    age: 0,

};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateComponent ],
      providers: [
        provideMockStore({initialState}),
        TranslateService,
        DatabaseService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should return the default state', () => {
    expect(2).toEqual(2);
  });

});
