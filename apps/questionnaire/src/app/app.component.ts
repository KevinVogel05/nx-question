import { loadQuestions, appLoaded } from './+state/question.actions';
import { QuestionAppState } from 'apps/questionnaire/src/app/+state/question.reducer';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'question-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'questionnaire';

  constructor(public store: Store<QuestionAppState>){
    //expose store for testing
    // @ts-ignore
    if(window.Cypress){
      // @ts-ignore
      window.store = this.store;
    }
  }

  ngOnInit(): void {
    this.store.dispatch(appLoaded());
  }
}
