import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.component';
import { AllComponent } from './all/all.component';
import { ImagesComponent } from './images/images.component';
import { PhonesComponent } from './phones/phones.component';
import { LinksComponent } from './links/links.component';
import { NetworksComponent } from './networks/networks.component';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'all',
    component: AllComponent,
    loadChildren: () => import('./all/all.module').then((m) => m.AllModule),
  },
  {
    path: 'images',
    component: ImagesComponent,
    loadChildren: () =>
      import('./images/images.module').then((m) => m.ImagesModule),
  },
  {
    path: 'phones',
    component: PhonesComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'networks',
    component: NetworksComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule {}
