import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  { path: 'html', loadChildren: () => import('./html/html.module').then(m => m.HtmlModule) },
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
  { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
