import { Questions } from './../models/questions.model';
import { ofType } from '@ngrx/effects';
import { Answers } from './../models/answer.model';
import { TranslateService } from './../services/translate.service';
import * as fromReducer from './question.reducer';
import { loadQuestions, updateLanguage, updateAnswer} from './question.actions';

describe('Question Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };
      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('updateAnswer', () => {
    it('update name', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'Timmy Hilton'
      const newAnswers = {...initialState, name: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.name).toEqual(newAnswer);
    });
    it('update age', () => {
      const { initialState } = fromReducer;
      const newAnswer = 22
      const newAnswers = {...initialState, age: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.age).toEqual(newAnswer);
      expect(typeof state.answers.age).toBe('number');
    });
    it('update intrests', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'reading books'
      const newAnswers = {...initialState, intrests: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.intrests).toEqual(newAnswer);
    });
    it('update hates', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'Pain'
      const newAnswers = {...initialState, hates: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.hates).toEqual(newAnswer);
    });
    it('update job', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'Developer'
      const newAnswers = {...initialState, job: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.job).toEqual(newAnswer);
    });
    it('update color', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'Blue'
      const newAnswers = {...initialState, color: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.color).toEqual(newAnswer);
    });
    it('update gender', () => {
      const { initialState } = fromReducer;
      const newAnswer = 'Female'
      const newAnswers = {...initialState, gender: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.gender).toEqual(newAnswer);
    });
    it('update like', () => {
      const { initialState } = fromReducer;
      const newAnswer = false
      const newAnswers = {...initialState, like: newAnswer };

      const action = updateAnswer({ answer: newAnswers });
      const state = fromReducer.reducer(initialState, action);
      expect(state.answers.like).toEqual(newAnswer);
      expect(typeof state.answers.like).toBe('boolean');
    });
  });

  describe('updateLanguage', () => {
    it('create new State', () => {
      const { initialState } = fromReducer;
      const newState = {
        lang: 'en'
      };
      const action = updateLanguage({ language: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.language).toEqual(newState);
      expect(state).not.toBe(newState);
    });

    it('update language', () => {
      const { initialState } = fromReducer;
      const newLanguage = 'de'
      const newState = {...initialState, lang: newLanguage };

      const action = updateLanguage({ language: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.language.lang).toEqual(newLanguage);
    });

  });

  describe('loadQuestions', () => {
    it('loading a question', () => {
      const { initialState } = fromReducer;
      const newQuestion: Questions = {
        id: '9',
        en: 'What do you want?',
        de: 'Was willst du?'
      };
      const action = loadQuestions({ question: newQuestion });
      const state = fromReducer.reducer(initialState, action);
      expect(state.questions).toEqual(newQuestion);
    });
  });

});
