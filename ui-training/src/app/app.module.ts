import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PermiterCalcComponent } from './permiter-calc/permiter-calc.component';
import { AreaCalcComponent } from './area-calc/area-calc.component';
import { PrimeNumbCalcComponent } from './prime-numb-calc/prime-numb-calc.component';
import { ComponentChangerComponent } from './component-changer/component-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    PermiterCalcComponent,
    AreaCalcComponent,
    PrimeNumbCalcComponent,
    ComponentChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
