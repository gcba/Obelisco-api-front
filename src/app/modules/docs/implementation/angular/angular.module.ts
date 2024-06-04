import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [AngularComponent],
  imports: [CommonModule, ClipboardModule],
})
export class AngularModule {}
