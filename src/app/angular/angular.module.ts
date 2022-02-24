import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngularComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
