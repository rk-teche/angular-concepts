import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CssScssComponent } from './concepts/css-scss/css-scss.component';
import { HtmlComponent } from './concepts/html/html.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'html',
    component: HtmlComponent
  },
  {
    path: 'css-scss',
    component: CssScssComponent
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
