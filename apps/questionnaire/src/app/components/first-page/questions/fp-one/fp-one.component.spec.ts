import { Observable } from 'rxjs';
import { initialState } from './../../../../+state/question.reducer';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { DataService } from './../../../../services/data.service';
import { FpOneComponent } from './fp-one.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, select } from '@ngrx/store';
import { Injector } from '@angular/core';
import { selectAnswers } from 'apps/questionnaire/src/app/+state/question.selectors';
import { take } from 'rxjs/operators';
import { updateAnswer } from 'apps/questionnaire/src/app/+state/question.actions';
import { createComponent } from '@angular/compiler/src/core';

describe('FirstPageComponent', () => {
  let component: FpOneComponent;
  let fixture: ComponentFixture<FpOneComponent>;
  //let store: MockStore<QuestionAppState>;
  let store: MockStore;


  // beforeEach(async () => {
  //   //let state = { featureKey: {property: 'AppState'}};
  //   TestBed.configureTestingModule({
  //     declarations: [ FpOneComponent ],
  //     providers: [
  //       provideMockStore({initialState}),
  //       DataService,
  //       DatabaseService,
  //       TranslateService
  //     ],
  //     //imports: [StoreModule.forRoot({})]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   store = TestBed.inject(MockStore);
  //   fixture = TestBed.createComponent(FpOneComponent);
  //   //store = fixture.debugElement.injector.get(Store);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   spyOn(store, 'dispatch').and.callFake(() => {});
  // });

  // afterEach(() => { fixture.destroy(); });
  beforeEach(() => {
    const injector = Injector.create({
      providers: [
        provideMockStore({ initialState }),
      ],
    });


    store = injector.get(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
    //fixture = createComponent(FpOneComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });
  it('updateAnswer should dispatch with a new name', () => {
    let oldState = initialState.answers;
    let newState = {...oldState, name: 'Gustavo'};
    store.dispatch(updateAnswer({answer: newState}))
    expect(store.dispatch).toHaveBeenCalledWith(
      updateAnswer({answer: newState})
    )
    expect(newState.name).toEqual('Gustavo');
});
});
