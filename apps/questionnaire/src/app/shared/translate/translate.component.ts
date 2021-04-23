import { TranslateService } from './../../services/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  lang;
  language;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  onChange(i){
    this.translate.setLanguage(i);
    // update language
    this.lang = this.translate.loadLanguage();
    this.translate.updateLanguage(this.lang);
  }

  test(){
    console.log('testing availability')
  }

}
