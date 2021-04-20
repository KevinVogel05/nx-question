import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { selectAnswers } from './../../../../+state/question.selectors';
import { QuestionAppState } from './../../../../+state/question.reducer';
import { DataService } from './../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'question-fp-three',
  templateUrl: './fp-three.component.html',
  styleUrls: ['./fp-three.component.css']
})
export class FpThreeComponent implements OnInit, OnDestroy {

  interests: string;
  hate: string;
  job: string;
  answers$: Observable<any>

  question1;
  question2;
  question3;

  language;
  subscriptionLanguage: Subscription;

  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question1 = this.translate.loadQuestion(2);
    this.question1 = this.translate.translateQuestion(this.language);
    this.question2 = this.translate.loadQuestion(3);
    this.question2 = this.translate.translateQuestion(this.language);
    this.question3 = this.translate.loadQuestion(4);
    this.question3 = this.translate.translateQuestion(this.language);
    // update language onChange
    this.subscriptionLanguage = this.translate.getLanguageUpdate().subscribe(lang => {
      this.language = lang;
      this.question1 = this.translate.loadQuestion(2);
      this.question1 = this.translate.translateQuestion(this.language);
      this.question2 = this.translate.loadQuestion(3);
      this.question2 = this.translate.translateQuestion(this.language);
      this.question3 = this.translate.loadQuestion(4);
      this.question3 = this.translate.translateQuestion(this.language);
    })
  }
  ngOnDestroy() {
    this.subscriptionLanguage.unsubscribe();
  }

  onNext(userInterests){
    this.interests = userInterests;
    this.data.changeInterests(this.interests);
  }
  onNext2(userHate){
    this.hate = userHate;
    this.data.changeHate(this.hate);
  }
  onNext3(userJob){
    this.job = userJob;
    this.data.changeJob(this.job);

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswers = {...answer, intrests: this.interests, hates: this.hate, job: this.job };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }
}
