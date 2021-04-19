import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { selectAnswers } from './../../../../+state/question.selectors';
import { QuestionAppState } from './../../../../+state/question.reducer';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'question-fp-three',
  templateUrl: './fp-three.component.html',
  styleUrls: ['./fp-three.component.css']
})
export class FpThreeComponent implements OnInit {

  interests: string;
  hate: string;
  job: string;
  answers$: Observable<any>

  question1: any;
  question2: any;
  question3: any;


  constructor(public data: DataService, public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    this.question1 = this.database.loadQuestions(2);
    this.question2 = this.database.loadQuestions(3);
    this.question3 = this.database.loadQuestions(4);
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
