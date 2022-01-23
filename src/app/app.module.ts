import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './concepts/html/html.component';
import { CssScssComponent } from './concepts/css-scss/css-scss.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssScssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
