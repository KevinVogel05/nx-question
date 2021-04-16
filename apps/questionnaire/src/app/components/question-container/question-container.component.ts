import { QuestionAppState } from './../../+state/question.reducer';
import { DataService } from './../../services/data.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Answers } from '../../models/answer.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

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

  answers$: Observable<Answers>

  constructor(public data: DataService, private store: Store<QuestionAppState>) { }

  ngOnInit(): void {
    this.answers$ = this.store.select(s => s.answers.answers);
  }

}
