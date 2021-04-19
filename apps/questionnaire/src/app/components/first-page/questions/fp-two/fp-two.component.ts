import { DatabaseService } from './../../../../services/database.service';
import { selectAnswers } from './../../../../+state/question.selectors';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { initialState, QuestionAppState } from './../../../../+state/question.reducer';
import { Answers } from './../../../../models/answer.model';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'question-fp-two',
  templateUrl: './fp-two.component.html',
  styleUrls: ['./fp-two.component.css']
})
export class FpTwoComponent implements OnInit {

  age: number;
  question: any;
  answers$: Observable<any>

  // private answers: Observable<Answers>;
  // private _answers$: ReplaySubject<Answers> = new ReplaySubject<Answers>();
  // answers$: Observable<Answers> = this._answers$.asObservable();

  constructor(public data: DataService, public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    //this.data.currentAge$$.subscribe(input => this.age = input);
    //this._answers$.next();
    this.answers$ = this.store.select(selectAnswers);
    this.question = this.database.loadQuestions(1);
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
