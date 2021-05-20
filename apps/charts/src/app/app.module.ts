import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts'
import { ChartModule } from 'angular2-chartjs'

import { AppComponent } from './app.component';
import { HighchartComponent } from './components/highchart/highchart.component';
import { ChartJsComponent } from './components/chart-js/chart-js.component';


@NgModule({
  declarations: [AppComponent, HighchartComponent, ChartJsComponent],
  imports: [
    BrowserModule,
    //ChartsModule,
    //ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
