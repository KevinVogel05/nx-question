import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-fp-three',
  templateUrl: './fp-three.component.html',
  styleUrls: ['./fp-three.component.css']
})
export class FpThreeComponent implements OnInit {

  interests: string;
  hate: string;
  job: string;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    //this.data.currentInterests$$.subscribe(input => this.interests = input);
    //this.data.currentHate$$.subscribe(input => this.hate = input);
    //this.data.currentJob$$.subscribe(input => this.job = input);
  }

  onNext(userInterests){
    this.interests = userInterests;
    this.data.changeInterests(this.interests);
  }
  onNext2(userHate){
    this.hate = userHate;
    this.data.changeHate(this.hate);
  }
  onNext3(userJob){
    this.job = userJob;
    this.data.changeJob(this.job);
  }
}
