import { DataService } from './../../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-sp-two',
  templateUrl: './sp-two.component.html',
  styleUrls: ['./sp-two.component.scss']
})
export class SpTwoComponent implements OnInit {

  public gender:string;

  public genderChoice:string[] =[
    'Male',
    'Female',
    'Other'
  ];

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  genderSelected(e){
    this.gender = e.target.value;
    this.data.changeGender(this.gender);
  }
}
