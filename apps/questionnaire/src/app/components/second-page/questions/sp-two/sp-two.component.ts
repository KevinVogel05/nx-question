import { TranslateService } from './../../../../services/translate.service';
import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { selectAnswers } from './../../../../+state/question.selectors';
import { DataService } from './../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';

@Component({
  selector: 'question-sp-two',
  templateUrl: './sp-two.component.html',
  styleUrls: ['./sp-two.component.scss']
})
export class SpTwoComponent implements OnInit, OnDestroy {

  public gender: string;
  answers$: Observable<any>
  question;
  language;
  subscriptionLanguage: Subscription;

  public genderChoice:string[] =[
    'Male',
    'Female',
    'Other'
  ];

  constructor(public data: DataService, public database: DatabaseService, public translate: TranslateService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    // load language
    this.language = this.translate.loadLanguage();
    // load question and translate
    this.question = this.translate.loadQuestion(6);
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
  genderSelected(e){
    this.gender = e.target.value;
    this.data.changeGender(this.gender);

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.gender;
      let newAnswers = {...answer, gender: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });
  }
}
