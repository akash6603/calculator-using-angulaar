import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorKeysComponent } from './calculator-keys/calculator-keys.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorKeysComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
