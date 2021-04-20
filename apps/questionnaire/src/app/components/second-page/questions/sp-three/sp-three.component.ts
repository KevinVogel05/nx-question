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
  selector: 'question-sp-three',
  templateUrl: './sp-three.component.html',
  styleUrls: ['./sp-three.component.css']
})
export class SpThreeComponent implements OnInit, OnDestroy {

  like: string;
  likes: boolean;
  answers$: Observable<any>;
  question;
  language;
  subscriptionLanguage: Subscription;

  public likeChoice:string[] =[
    'Yes',
    'No',
  ];
  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question = this.translate.loadQuestion(7);
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

  likeSelected(e){
    this.like = e.target.value;
    if (this.like == 'Yes'){
      this.data.changeLike(true);
      this.likes = true;
    }
    else {
      this.data.changeLike(false);
      this.likes = false;
    }

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.likes;
      let newAnswers = {...answer, like: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }
}
