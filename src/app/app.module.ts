import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenerateModule } from './generate/generate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GenerateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
