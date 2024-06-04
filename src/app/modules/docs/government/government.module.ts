import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovernmentRoutingModule } from './government-routing.module';
import { GovernmentComponent } from './government.component';
import { AreasByIdComponent } from './areas-by-id/areas-by-id.component';
import { AreasAllDataComponent } from './areas-all-data/areas-all-data.component';
import { CodeViewerComponent } from 'src/app/components/code-viewer/code-viewer.component';
import { AreasListComponent } from './areas-list/areas-list.component';

@NgModule({
  declarations: [
    GovernmentComponent,
    AreasByIdComponent,
    AreasAllDataComponent,
    AreasListComponent,
  ],
  imports: [CommonModule, GovernmentRoutingModule, CodeViewerComponent],
})
export class GovernmentModule {}
