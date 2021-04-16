import { Answers } from './../models/answer.model';
import { createAction, props } from '@ngrx/store';

export const loadQuestions = createAction(
  '[Question] Load Questions',
  props<{answers: Answers}>()
);




