import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsSyntaxComponent } from './js-syntax/js-syntax.component';

const routes: Routes = [
  {
    path: '',
    component: JsSyntaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
