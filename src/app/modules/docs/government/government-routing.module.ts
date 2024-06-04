import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasAllDataComponent } from './areas-all-data/areas-all-data.component';
import { AreasByIdComponent } from './areas-by-id/areas-by-id.component';
import { AreasListComponent } from './areas-list/areas-list.component';

const routes: Routes = [
  {
    path: 'all',
    component: AreasAllDataComponent,
    loadChildren: () =>
      import('./areas-all-data/areas-all-data.module').then(
        (m) => m.AreasAllDataModule
      ),
  },
  {
    path: 'areas-list',
    component: AreasListComponent,
    loadChildren: () =>
      import('./areas-list/areas-list.module').then((m) => m.AreasListModule),
  },
  {
    path: 'areas-by-id',
    component: AreasByIdComponent,
    loadChildren: () =>
      import('./areas-by-id/areas-by-id.module').then((m) => m.AreasByIdModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentRoutingModule {}
