
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SpThreeComponent } from './questions/sp-three/sp-three.component';
import { SpTwoComponent } from './questions/sp-two/sp-two.component';
import { SpOneComponent } from './questions/sp-one/sp-one.component';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  declarations: [
    SecondPageComponent,
    SpOneComponent,
    SpTwoComponent,
    SpThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecondPageComponent,
        children: [
          {
            path: '1',
            component: SpOneComponent
          },
          {
            path: '2',
            component: SpTwoComponent
          },
          {
            path: '3',
            component: SpThreeComponent
          },
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [SecondPageComponent],
})
export class SecondPageModule {}
