import { DatabaseService } from './../../../../services/database.service';
import { updateAnswer } from './../../../../+state/question.actions';
import { take } from 'rxjs/operators';
import { selectAnswers } from './../../../../+state/question.selectors';
import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';

@Component({
  selector: 'question-sp-two',
  templateUrl: './sp-two.component.html',
  styleUrls: ['./sp-two.component.scss']
})
export class SpTwoComponent implements OnInit {

  public gender: string;
  answers$: Observable<any>
  question: any;

  public genderChoice:string[] =[
    'Male',
    'Female',
    'Other'
  ];

  constructor(public data: DataService, public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(selectAnswers);
    this.question = this.database.loadQuestions(6);
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
