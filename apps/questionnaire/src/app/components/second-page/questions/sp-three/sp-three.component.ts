import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-sp-three',
  templateUrl: './sp-three.component.html',
  styleUrls: ['./sp-three.component.css']
})
export class SpThreeComponent implements OnInit {

  public like:string;

  public likeChoice:string[] =[
    'Yes',
    'No',
  ];
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  likeSelected(e){
    this.like = e.target.value;
    if (this.like == 'Yes'){
      this.data.changeLike(true);
    }
    else {
      this.data.changeLike(false);
    }
  }
}
