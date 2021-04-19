import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';
import { selectAnswers } from 'apps/questionnaire/src/app/+state/question.selectors';

@Component({
  selector: 'question-sp-one',
  templateUrl: './sp-one.component.html',
  styleUrls: ['./sp-one.component.css']
})
export class SpOneComponent implements OnInit {

fav: string;
answers$: Observable<any>
question: any;


  constructor(public data: DataService, public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    this.question = this.database.loadQuestions(5);
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
