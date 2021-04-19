import { Answers } from './../models/answer.model';
import { createAction, props } from '@ngrx/store';

export const loadQuestions = createAction(
  '[Question] Load Questions',
  props<{answers: Answers}>()
);
export const updateAnswer = createAction(
  '[Question] Update Answer',
  props<{answer: any}>()
);
export const updateName = createAction(
  '[Question] Update Answer',
  props<{payload: any}>()
);






