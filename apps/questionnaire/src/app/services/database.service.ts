import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {

  // 'data from a database'
  questions = [
        {
            "id": "1",
            "en": "What is your Name?",
            "de": "Wie heißt du?",
            "answer": ""
        },
        {
            "id": "2",
            "en": "How old are you?",
            "de": "Wie alt bist du?",
            "answer": ""
        },
        {
            "id": "3",
            "en": "What are your intrests?",
            "de": "Was sind deine Interessen?",
            "answer": ""
        },
        {
            "id": "4",
            "en": "What do you hate?",
            "de": "Was hasst du?",
            "answer": ""
        },
        {
            "id": "5",
            "en": "What is your job?",
            "de": "Was machst du Beruflich?",
            "answer": ""
        },
        {
            "id": "6",
            "en": "What is your favourite color?",
            "de": "Was ist deine Lieblingsfarbe?",
            "answer": ""
        },
        {
            "id": "7",
            "en": "What are you?",
            "de": "Was bist du?",
            "answer": ""
        },
        {
            "id": "8",
            "en": "Did you like the Survey?",
            "de": "Hat dir die Umfrage gefallen?",
            "answer": ""
        }
  ];


  constructor() { }

  //load from fake 'Database'
  loadQuestions(i){
    return this.questions[i]
  }

  //load Answers
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
