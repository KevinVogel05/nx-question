import { selectLanguage } from './../+state/question.selectors';
import { loadQuestions, updateLanguage } from './../+state/question.actions';
import { DatabaseService } from './database.service';
import { take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuestionAppState } from '../+state/question.reducer';
import { selectQuestions } from '../+state/question.selectors';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class TranslateService{

  question$: Observable<any>;
  lang$: Observable<any>;
  question;
  questionTranslated: string;
  lang: string = 'en';
  private _lang$$ = new Subject<any>();

  constructor(private store: Store<QuestionAppState>, public database: DatabaseService) { }

  //---load with store---
  loadQuestion(i){
    // select State
    this.question$ = this.store.select(selectQuestions);
    // set State
    this.question$.pipe(take(1)).subscribe(v => {
      let state = v;
      let data = this.database.loadQuestions(i);
      let newState = {...state, id: data.id, en: data.en , de: data.de };
      this.store.dispatch(loadQuestions({question: newState}));
    });
    // load State
    this.store.pipe(select(selectQuestions), take(1)).subscribe((data) => {
      this.question = data;
    });
  }

  // set language
  setLanguage(i){
    // select State
    this.lang$ = this.store.select(selectLanguage);
    // set State
    this.lang$.pipe(take(1)).subscribe(v => {
      switch(i){
        case 'English':
          this.lang = 'en';
          break;
        case 'Deutsch':
          this.lang = 'de';
          break;
        default:
          this.lang = 'en';
          break;
      }
      let state = v;
      let newState = {...state, lang: this.lang };
      this.store.dispatch(updateLanguage({language: newState}));
    });
  }

  // update language
  updateLanguage(v: string){
    this._lang$$.next(v);
  }
  getLanguageUpdate(): Observable<any>{
    return this._lang$$.asObservable();
  }


  // load language
  loadLanguage(){
    this.lang$ = this.store.select(selectLanguage);
    this.store.pipe(select(selectLanguage), take(1)).subscribe((data) => {
      this.lang = data.lang;
    });
    return this.lang;
  }

  // translate Question
  translateQuestion(i){
    switch(i){
      case 'en': return this.question.en;
        break;
      case 'de': return this.question.de;
        break;
      default: return this.question.en;
    }
  }


}
