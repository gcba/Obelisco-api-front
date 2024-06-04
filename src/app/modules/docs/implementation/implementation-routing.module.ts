import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { FlutterComponent } from './flutter/flutter.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PhpComponent } from './php/php.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  {
    path: 'angular',
    component: AngularComponent,
    loadChildren: () =>
      import('./angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'flutter',
    component: FlutterComponent,
    loadChildren: () =>
      import('./flutter/flutter.module').then((m) => m.FlutterModule),
  },

  {
    path: 'javascript',
    component: JavascriptComponent,
    loadChildren: () =>
      import('./javascript/javascript.module').then((m) => m.JavascriptModule),
  },
  {
    path: 'php',
    component: PhpComponent,
    loadChildren: () => import('./php/php.module').then((m) => m.PhpModule),
  },
  {
    path: 'react',
    component: ReactComponent,
    loadChildren: () =>
      import('./react/react.module').then((m) => m.ReactModule),
  },

  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImplementationRoutingModule {}
