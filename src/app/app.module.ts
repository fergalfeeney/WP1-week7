import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OmbdApiService } from './services/ombd-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OmbdApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
