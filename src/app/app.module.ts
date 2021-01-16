import { MenuModule } from './menu/menu.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ButtonsModule,WavesModule,CollapseModule,
    BrowserAnimationsModule,ChartsModule,MenuModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
