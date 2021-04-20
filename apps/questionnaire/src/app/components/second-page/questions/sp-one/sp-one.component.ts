import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';
import { selectAnswers } from 'apps/questionnaire/src/app/+state/question.selectors';

@Component({
  selector: 'question-sp-one',
  templateUrl: './sp-one.component.html',
  styleUrls: ['./sp-one.component.css']
})
export class SpOneComponent implements OnInit, OnDestroy {

fav: string;
answers$: Observable<any>
question;
language;
subscriptionLanguage: Subscription;


  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question = this.translate.loadQuestion(5);
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

  onNext(userFav){
    this.fav = userFav;
    this.data.changeFav(this.fav);

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.fav;
      let newAnswers = {...answer, color: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }

}
