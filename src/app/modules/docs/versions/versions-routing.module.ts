import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AllVersionsComponent } from './all-versions/all-versions.component';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllVersionsComponent,
    loadChildren: () => import('./all-versions/all-versions.module').then((m) => m.AllVersionsModule)
  },
  {
    path: 'list',
    component: ListComponent,
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
    
  },
  {
    path: 'number',
    component: NumberComponent,
    loadChildren: () => import('./number/number.module').then((m) => m.NumberModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VersionsRoutingModule { }
