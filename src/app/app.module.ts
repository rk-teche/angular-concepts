import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './angular/state-management/counter-reducer'
import { postReducer } from './angular/state-management/post-reducer'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer, post: postReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
