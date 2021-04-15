import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class DataService {

  private userName$$ = new BehaviorSubject<string>('');
  currentName$$ = this.userName$$.asObservable();

  private userAge$$ = new BehaviorSubject<number>(0);
  currentAge$$ = this.userAge$$.asObservable();

  private userInterests$$ = new BehaviorSubject<string>('');
  currentInterests$$ = this.userInterests$$.asObservable();

  private userHate$$ = new BehaviorSubject<string>('');
  currentHate$$ = this.userHate$$.asObservable();

  private userJob$$ = new BehaviorSubject<string>('');
  currentJob$$ = this.userJob$$.asObservable();

  private userFav$$ = new BehaviorSubject<string>('');
  currentFav$$ = this.userFav$$.asObservable();

  private userGender$$ = new BehaviorSubject<string>('');
  currentGender$$ = this.userGender$$.asObservable();

  private userLike$$ = new BehaviorSubject<boolean>(true);
  currentLike$$ = this.userLike$$.asObservable();

  constructor() { }

  // set userInputs
  changeName(input: string){
    this.userName$$.next(input);
  }
  changeAge(input: number){
    this.userAge$$.next(input);
  }
  changeInterests(input: string){
    this.userInterests$$.next(input);
  }
  changeHate(input: string){
    this.userHate$$.next(input);
  }
  changeJob(input: string){
    this.userJob$$.next(input);
  }
  changeFav(input: string){
    this.userFav$$.next(input);
  }
  changeGender(input: string){
    this.userGender$$.next(input);
  }
  changeLike(input: boolean){
    this.userLike$$.next(input);
  }
}
