import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuestion from './question.reducer';
import { QuestionAppState, initialState } from './question.reducer';

export const selectQuestionState = createFeatureSelector<fromQuestion.State>(
  fromQuestion.questionFeatureKey
);


export const selectAnswers = (s: QuestionAppState) => s.answers.answers;

