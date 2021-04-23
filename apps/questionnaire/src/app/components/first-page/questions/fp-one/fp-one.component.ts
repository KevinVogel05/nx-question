import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { selectAnswers, selectQuestions} from './../../../../+state/question.selectors';
import { updateAnswer } from './../../../../+state/question.actions';
import { QuestionAppState, initialState} from './../../../../+state/question.reducer';
import { Answers } from './../../../../models/answer.model';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { State, Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'question-fp-one',
  templateUrl: './fp-one.component.html',
  styleUrls: ['./fp-one.component.css']
})
export class FpOneComponent implements OnInit, OnDestroy {

  name: string;
  answers$: Observable<any>;
  question;
  language;
  subscriptionLanguage: Subscription;
  // private answers: Observable<Answers>;
  // private _answers$: ReplaySubject<Answers> = new ReplaySubject<Answers>();
  // answers$: Observable<Answers> = this._answers$.asObservable();

  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, public store: Store<QuestionAppState>) {

  }

  ngOnInit(): void {
    //this.data.currentName$$.subscribe(input => this.name = input);
    //V1
    //this._answers$.next();
    //V2
    //this.answers$ = this.store.select(selectAnswers);

    // load questions without store
    //this.question = this.database.loadQuestions(0);

    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question = this.translate.loadQuestion(0);
    this.question = this.translate.translateQuestion(this.language);

    // update language onChange
    this.subscriptionLanguage = this.translate.getLanguageUpdate().subscribe(lang => {
      this.language = lang;
      this.question = this.translate.translateQuestion(this.language);
    })
  }
  ngOnDestroy() {
    this.subscriptionLanguage.unsubscribe();
  }

  onNext(userName){
    this.name = userName;
    this.data.changeName(this.name);

    //with Store
    this.answers$ = this.store.select(selectAnswers);
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.name;
      let newAnswers = {...answer, name: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }

  onChange(userName){
    this.name = userName;
    //with Store
    this.answers$ = this.store.select(selectAnswers);
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.name;
      let newAnswers = {...answer, name: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }
}
