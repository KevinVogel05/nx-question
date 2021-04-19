import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {

  // 'data from a database'
  questions = [
        {
            "id": "1",
            "question": "What is your Name?",
            "answer": ""
        },
        {
            "id": "2",
            "question": "How old are you?",
            "answer": ""
        },
        {
            "id": "3",
            "question": "What intrests you?",
            "answer": ""
        },
        {
            "id": "4",
            "question": "What do you hate?",
            "answer": ""
        },
        {
            "id": "5",
            "question": "What is your job?",
            "answer": ""
        },
        {
            "id": "6",
            "question": "What is your favourite color?",
            "answer": ""
        },
        {
            "id": "7",
            "question": "What are you?",
            "answer": ""
        },
        {
            "id": "8",
            "question": "Did you like the Survey?",
            "answer": ""
        }
  ];


  constructor() { }

  loadQuestions(i){
    //load from fake 'Database'
    return this.questions[i]
  }
}
