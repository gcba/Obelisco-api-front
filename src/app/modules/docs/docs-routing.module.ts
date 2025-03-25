import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { FooterComponent } from './footer/footer.component';
import { ImplementationComponent } from './implementation/implementation.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'introduction',
        component: IntroductionComponent,
        loadChildren: () =>
          import('./introduction/introduction.module').then(
            (m) => m.IntroductionModule
          ),
      },
      {
        path: 'footer',
        component: FooterComponent,
        loadChildren: () =>
          import('./footer/footer.module').then((m) => m.FooterModule),
      },
      {
        path: 'implementation',
        component: ImplementationComponent,
        loadChildren: () =>
          import('./implementation/implementation.module').then(
            (m) => m.ImplementationModule
          ),
      },
      { path: '**', pathMatch: 'full', redirectTo: 'introduction' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
