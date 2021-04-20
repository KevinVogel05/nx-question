import { TranslateService } from './services/translate.service';
import { DatabaseService } from './services/database.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { HeroComponent } from './components/hero/hero.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './+state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import * as fromQuestion from './+state/question.reducer';
import { QuestionEffects } from './+state/question.effects';
import { TranslateComponent } from './shared/translate/translate.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionContainerComponent,
    HeroComponent,
    TranslateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HeroComponent
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
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromQuestion.questionFeatureKey, fromQuestion.reducer),
    EffectsModule.forFeature([QuestionEffects])
  ],
  providers: [
    DataService,
    DatabaseService,
    TranslateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
