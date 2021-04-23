import { TranslateComponent } from './../shared/translate/translate.component';
import { Subscription } from 'rxjs';
import { initialState, reducer } from './../+state/question.reducer';
import { selectLanguage } from './../+state/question.selectors';
import { DatabaseService } from './database.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { QuestionAppState } from '../+state/question.reducer';
import { TranslateService } from './translate.service';
import { Store, select, StoreModule } from '@ngrx/store';
import { Injector } from '@angular/core';

describe('TranslateService', () => {
  let component: TranslateComponent;
  let service: TranslateService;
  let dataService: DatabaseService;
  let questionStore: Store<QuestionAppState>
  let store: MockStore;
  let fixture: ComponentFixture<TranslateComponent>;

  beforeEach(async () => {
    //let state = { featureKey: {property: 'AppState'}};
    service = new TranslateService(questionStore, dataService);
    TestBed.configureTestingModule({
    providers: [
      TranslateService,
      DatabaseService
    ],
    imports: [StoreModule.forRoot({})]
  }).compileComponents();
});
  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponent);
    //store = fixture.debugElement.injector.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const injector = Injector.create({
      providers: [
        provideMockStore({ initialState }),
      ],
    });
    store = injector.get(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  afterEach(() => { fixture.destroy(); });

  it('loadQuestion', () => {
    //service.loadQuestion(6);
    let question = service.question;
    console.log('question: ', question);
  })
  it('setLanguage', () => {
  // service.setLanguage('Deutsch');
  // let test = questionStore.select(selectLanguage);
  // console.log('language test: ', test)
  })
  it('updateLanguage', () => {
  service.updateLanguage('de');
  let subscriptionLanguage: Subscription;
  let value;
  subscriptionLanguage = service.getLanguageUpdate().subscribe(v => {
    value = v;
  });
  //expect(value).toEqual('de');
  })
  it('getLanguageUpdate', () => {

  })
  it('loadLanguage', () => {

  })
  it('translateQuestion', () => {

  })
});
