import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './angular/state-management/counter/counter-reducer'
import { postReducer } from './angular/state-management/post/post-reducer'
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

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
