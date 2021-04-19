import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as QuestionActions from './question.actions';


@Injectable()
export class QuestionEffects {


  constructor(private actions$: Actions, private data: DataService) {}

}
