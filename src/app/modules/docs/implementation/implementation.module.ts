import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImplementationRoutingModule } from './implementation-routing.module';
import { ImplementationComponent } from './implementation.component';


@NgModule({
  declarations: [
    ImplementationComponent
  ],
  imports: [
    CommonModule,
    ImplementationRoutingModule
  ]
})
export class ImplementationModule { }
