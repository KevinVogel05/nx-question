import { Questions } from './../models/questions.model';
import { Answers } from './../models/answer.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as QuestionActions from './question.actions';
import { mutableOn } from 'ngrx-etc';

export const questionFeatureKey = 'AppState';

export interface QuestionAppState{
  AppState: State;
}
export interface State {
  answers: Answers;
  questions: Questions;
  language;
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
  },
  questions: {
    id: '1',
    en: 'english',
    de: 'deutsch'
  },
  language: {
    lang: 'en'
  }
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export const reducer = createReducer(
  initialState,

  mutableOn(QuestionActions.loadQuestions, (state: State, action) => {
    const questions = action.question;
    return { ...state, questions};
  }),
  mutableOn(QuestionActions.updateLanguage, (state: State, action) => {
    const language = action.language;
    return { ...state, language};
  }),
  mutableOn(QuestionActions.updateAnswer, (state: State, action) => {
    const answers = action.answer;
    return { ...state, answers};
    //V2
    //return newState(state, answers);
    //V3
    //state.answers = action.answer;
  }),
);

