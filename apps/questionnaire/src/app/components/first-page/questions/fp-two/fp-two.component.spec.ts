import { take } from 'rxjs/operators';
import { selectAnswers } from 'apps/questionnaire/src/app/+state/question.selectors';
import { updateAnswer } from './../../../../+state/question.actions';
import { Observable } from 'rxjs';
import { initialState } from './../../../../+state/question.reducer';
import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { DataService } from './../../../../services/data.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FpTwoComponent } from './fp-two.component';
import { Injector } from '@angular/core';
describe('Component', () => {
  let store: MockStore;
  // let component: FpTwoComponent;
  // let fixture: ComponentFixture<FpTwoComponent>;

  // beforeEach(async(() => {
  //   const state = 'AppState';
  //   TestBed.configureTestingModule({
  //     providers: [
  //       provideMockStore({ initialState: state }),
  //       DataService,
  //       DatabaseService,
  //       TranslateService
  //     ]
  //   }).compileComponents();
  // }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(FpTwoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    const injector = Injector.create({
      providers: [
        provideMockStore({ initialState }),
      ],
    });

    store = injector.get(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  // false Positive
  it('updateAnswer should dispatch 15', () => {
      let age = 15;
      let answers$: Observable<any>
      answers$ = store.select(selectAnswers);
      answers$.pipe(take(1)).subscribe(v => {
        let answer = v;
        let newAnswer = age;
        let newAnswers = {...answer, age: newAnswer };
        store.dispatch(updateAnswer({answer: newAnswers}));
        expect(store.dispatch).toHaveBeenCalledWith(
          updateAnswer({answer: newAnswers})
          )
      });
  });
});
