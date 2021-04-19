import { DatabaseService } from './../../../../services/database.service';
import { selectAnswers} from './../../../../+state/question.selectors';
import { updateAnswer, updateName } from './../../../../+state/question.actions';
import { QuestionAppState, initialState} from './../../../../+state/question.reducer';
import { Answers } from './../../../../models/answer.model';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { State, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'question-fp-one',
  templateUrl: './fp-one.component.html',
  styleUrls: ['./fp-one.component.css']
})
export class FpOneComponent implements OnInit {

  name: string;
  answers$: Observable<any>;
  question: any;

  // private answers: Observable<Answers>;
  // private _answers$: ReplaySubject<Answers> = new ReplaySubject<Answers>();
  // answers$: Observable<Answers> = this._answers$.asObservable();

  constructor(public data: DataService, public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    //this.data.currentName$$.subscribe(input => this.name = input);
    //V1
    //this._answers$.next();

    //V2
    this.answers$ = this.store.select(selectAnswers);
    this.question = this.database.loadQuestions(0);
  }

  onNext(userName){
    this.name = userName;
    this.data.changeName(this.name);

    //with Store
    this.answers$.pipe(take(1)).subscribe(v => {
      let answer = v;
      let newAnswer = this.name;
      let newAnswers = {...answer, name: newAnswer };
      this.store.dispatch(updateAnswer({answer: newAnswers}));
    });

  }
}
