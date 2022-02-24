import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'html', loadChildren: () => import('./html/html.module').then(m => m.HtmlModule) },
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
  { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)  },
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) },
  { path: 'dev-tool', loadChildren: () => import('./dev-tool/dev-tool.module').then(m => m.DevToolModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
