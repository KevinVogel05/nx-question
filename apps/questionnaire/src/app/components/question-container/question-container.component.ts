import { DataService } from './../../services/data.service';
import { FirstPageModule } from './../first-page/first-page.module';
import { FpOneComponent } from './../first-page/questions/fp-one/fp-one.component';
import { SharedComponent } from './../shared/shared.component';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Answers } from '../../models/answer.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'question-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})

export class QuestionContainerComponent implements OnInit {


  sample: Answers = {
    name: 'Kevin Vogel',
    age: 56,
    intrests: 'nicht einhörner',
    hates: 'everything',
    job: 'Maurer',
    color: 'Black',
    gender: 'Male',
    like: true
  };

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

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
