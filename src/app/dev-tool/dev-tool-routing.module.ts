import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevToolComponent } from './dev-tool.component';

const routes: Routes = [{ path: '', component: DevToolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevToolRoutingModule { }
