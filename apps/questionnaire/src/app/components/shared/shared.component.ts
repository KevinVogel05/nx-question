import { Answers } from './../../models/answer.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  userInput$: Observable<Answers>;

  constructor() { }

  ngOnInit() {
  }

}
