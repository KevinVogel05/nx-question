import { take } from 'rxjs/operators';
import { DatabaseService } from './../../services/database.service';
import { selectAnswers } from './../../+state/question.selectors';
import { QuestionAppState } from './../../+state/question.reducer';
import { DataService } from './../../services/data.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Answers } from '../../models/answer.model';
import { Observable } from 'rxjs';
import { Store, State, select } from '@ngrx/store';
import { selectQuestionState } from '../../+state/question.selectors';

@Component({
  selector: 'question-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})

export class QuestionContainerComponent implements OnInit {

  userInput: Answers = {
    name: '',
    age: null,
    intrests: '',
    hates: '',
    job: '',
    color: '',
    gender: '',
    like: null
  };

  answers$: Observable<any>

  constructor(public data: DataService,public database: DatabaseService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    //this.answers$ = this.store.select(s => s.answers.answers);
    this.answers$ = this.store.select(selectAnswers);
  }

  onSubmit(){
    //send store-data to service --> database
    this.store.pipe(select(selectAnswers), take(1)).subscribe((data) => {
      this.database.loadAnswers(data);
    });
  }
}
