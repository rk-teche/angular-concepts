import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JsSyntaxComponent } from './js-syntax/js-syntax.component';


@NgModule({
  declarations: [
    JsSyntaxComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
