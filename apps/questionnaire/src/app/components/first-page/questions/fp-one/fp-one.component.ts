import { DataService } from './../../../../services/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'question-fp-one',
  templateUrl: './fp-one.component.html',
  styleUrls: ['./fp-one.component.css']
})
export class FpOneComponent implements OnInit {

  public name: string;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.data.currentName$$.subscribe(input => this.name = input);
  }

  onNext(userName){
    this.name = userName;
    this.data.changeName(this.name);
  }
}
