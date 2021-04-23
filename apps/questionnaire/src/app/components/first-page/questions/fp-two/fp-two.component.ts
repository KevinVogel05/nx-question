import { TranslateComponent } from './../../../../shared/translate/translate.component';
import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { selectAnswers } from './../../../../+state/question.selectors';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { initialState, QuestionAppState } from './../../../../+state/question.reducer';
import { Answers } from './../../../../models/answer.model';
import { DataService } from './../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'question-fp-two',
  templateUrl: './fp-two.component.html',
  styleUrls: ['./fp-two.component.css']
})
export class FpTwoComponent implements OnInit, OnDestroy {

  age: number;
  answers$: Observable<any>
  language;
  question;
  subscriptionLanguage: Subscription;

  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);

    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question = this.translate.loadQuestion(1);
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

  onNext(userAge){
    this.age = userAge;
    this.data.changeAge(this.age);

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.age;
      let newAnswers = {...answer, age: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }
}
