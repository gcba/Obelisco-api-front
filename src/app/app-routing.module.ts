import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { DocsComponent } from './modules/docs/docs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs/docs.module').then((m) => m.DocsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
