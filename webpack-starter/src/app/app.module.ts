import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {EJ_ACCORDION_COMPONENTS} from './ej/accordion.component';

import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, EJ_ACCORDION_COMPONENTS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
