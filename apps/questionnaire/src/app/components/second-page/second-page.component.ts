import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  showMe: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hide(){
    this.showMe = !this.showMe;
  }
}
