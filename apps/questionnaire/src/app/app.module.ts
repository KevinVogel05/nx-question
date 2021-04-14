
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    DropDownComponent,
    TextFieldComponent,
    QuestionContainerComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HeroComponent
      },
      {
        path: 'questions',
        component: QuestionContainerComponent
      },
      {
        path: 'first',
        //component: FirstPageComponent
        loadChildren: () => import('./components/first-page/first-page.module').then(m => m.FirstPageModule)
      },
      {
        path: 'second',
        //component: SecondPageComponent,
        loadChildren: () => import('./components/second-page/second-page.module').then(m => m.SecondPageModule)
      },
      {
        path: 'final',
        component: QuestionContainerComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
