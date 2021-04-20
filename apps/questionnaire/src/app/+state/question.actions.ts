import { Questions } from './../models/questions.model';
import { Answers } from './../models/answer.model';
import { createAction, props } from '@ngrx/store';

export const loadQuestions = createAction(
  '[Question] Load Questions',
  props<{question: any}>()
);
export const updateAnswer = createAction(
  '[Question] Update Answer',
  props<{answer: any}>()
);
export const updateLanguage = createAction(
  '[Question] Update Language',
  props<{language: any}>()
);





