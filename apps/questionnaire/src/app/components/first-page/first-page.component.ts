import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  showMe: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hide(){
    this.showMe = !this.showMe;
  }
}
