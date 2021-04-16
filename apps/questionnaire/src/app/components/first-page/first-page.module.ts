import { DataService } from './../../services/data.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FirstPageComponent } from './first-page.component';
import { FpOneComponent } from './questions/fp-one/fp-one.component';
import { FpTwoComponent } from './questions/fp-two/fp-two.component';
import { FpThreeComponent } from './questions/fp-three/fp-three.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    FpOneComponent,
    FpTwoComponent,
    FpThreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstPageComponent,
        children: [
          {
            path: '1',
            component: FpOneComponent
          },
          {
            path: '2',
            component: FpTwoComponent
          },
          {
            path: '3',
            component: FpThreeComponent
          },
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [FirstPageComponent],
})
export class FirstPageModule {}
