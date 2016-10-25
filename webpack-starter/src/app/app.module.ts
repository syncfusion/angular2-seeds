import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {EJ_GRID_COMPONENTS} from './ej/grid.component';

import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, EJ_GRID_COMPONENTS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
