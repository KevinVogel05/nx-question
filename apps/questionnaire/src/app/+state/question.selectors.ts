import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuestion from './question.reducer';
import { QuestionAppState, initialState } from './question.reducer';

export const selectQuestionState = createFeatureSelector<fromQuestion.State>(
  fromQuestion.questionFeatureKey
);

export const selectAnswers = (s: QuestionAppState) => s.AppState.answers;
export const selectQuestions = (s: QuestionAppState) => s.AppState.questions;
export const selectLanguage = (s: QuestionAppState) => s.AppState.language;
