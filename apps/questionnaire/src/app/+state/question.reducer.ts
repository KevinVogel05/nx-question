import { Answers } from './../models/answer.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as QuestionActions from './question.actions';
import { mutableOn } from 'ngrx-etc';

export const questionFeatureKey = 'answers';

export interface State {
  answers: Answers;
}

export interface QuestionAppState{
  answers: State;
}

export const initialState: State = {
  answers: {
    name: 'init',
    age: 4,
    intrests: 'init',
    hates: 'init',
    job: 'init',
    color: 'init',
    gender: 'init',
    like: true
  }
};


export const reducer = createReducer(
  initialState,

  mutableOn(QuestionActions.loadQuestions, (state: State, action) => {
    const questions = action.answers;
    return { ...state, questions}
  }),

);

