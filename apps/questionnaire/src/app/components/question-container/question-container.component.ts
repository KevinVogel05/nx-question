import { Component, OnInit } from '@angular/core';
import { Answers } from '../../models/answer.model';

@Component({
  selector: 'question-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})

export class QuestionContainerComponent implements OnInit {

  sample: Answers = {
    name: 'Kevin Vogel',
    age: 26,
    intrests: 'nicht einhörner',
    hates: 'everything',
    job: 'obdachlos',
    color: 'Black',
    gender: 'Male',
    like: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
