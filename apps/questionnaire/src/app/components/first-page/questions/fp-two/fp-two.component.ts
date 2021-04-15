import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-fp-two',
  templateUrl: './fp-two.component.html',
  styleUrls: ['./fp-two.component.css']
})
export class FpTwoComponent implements OnInit {

  public age: number;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.data.currentAge$$.subscribe(input => this.age = input);
  }

  onNext(userAge){
    this.age = userAge;
    this.data.changeAge(this.age);
  }
}
