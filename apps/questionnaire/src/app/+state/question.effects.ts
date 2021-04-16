import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as QuestionActions from './question.actions';


@Injectable()
export class QuestionEffects {


  // loadQuestions = createEffect(() =>
  //   this.actions$.pipe(
  //   ofType(this.loadQuestions),
  //   switchMap(q => this.data.loadAnswers().pipe(
  //     map(question => {
  //       return QuestionActions.loadQuestions({question})
  //     })))));

  constructor(private actions$: Actions, private data: DataService) {}

}
