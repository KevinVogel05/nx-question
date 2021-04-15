import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-sp-one',
  templateUrl: './sp-one.component.html',
  styleUrls: ['./sp-one.component.css']
})
export class SpOneComponent implements OnInit {

  public fav: string;

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  onNext(userFav){
    this.fav = userFav;
    this.data.changeFav(this.fav);
  }

}
