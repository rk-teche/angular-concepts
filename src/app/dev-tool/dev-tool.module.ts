import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolRoutingModule } from './dev-tool-routing.module';
import { DevToolComponent } from './dev-tool.component';


@NgModule({
  declarations: [
    DevToolComponent
  ],
  imports: [
    CommonModule,
    DevToolRoutingModule
  ]
})
export class DevToolModule { }
