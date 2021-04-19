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
    age: 0,
    intrests: 'init',
    hates: 'init',
    job: 'init',
    color: 'init',
    gender: 'init',
    like: true
  }
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export const reducer = createReducer(
  initialState,

  mutableOn(QuestionActions.loadQuestions, (state: State, action) => {
    const questions = action.answers;
    return { ...state, questions}
  }),
  mutableOn(QuestionActions.updateAnswer, (state: State, action) => {
    const answers = action.answer;
    return { ...state, answers}

    //V2
    //return newState(state, answers);

    //V3
    //state.answers = action.answer;
  }),
);

