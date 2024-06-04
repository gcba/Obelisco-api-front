import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderImagesComponent } from './header-images/header-images.component';

const routes: Routes = [
  {
    path: 'images',
    component: HeaderImagesComponent,
    loadChildren: () =>
      import('./header-images/header-images.module').then(
        (m) => m.HeaderImagesModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
