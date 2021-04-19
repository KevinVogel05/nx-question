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

  loadAnswers(i){
    console.log('loadAnswers: ', i)

    this.questions[0].answer = i.name;
    this.questions[1].answer = i.age;
    this.questions[2].answer = i.intrests;
    this.questions[3].answer = i.hates;
    this.questions[4].answer = i.job;
    this.questions[5].answer = i.color;
    this.questions[6].answer = i.gender;
    this.questions[7].answer = i.like;

    console.log('value: ', this.questions)

    //send data to databse...
  }
}
