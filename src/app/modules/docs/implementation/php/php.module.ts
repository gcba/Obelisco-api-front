import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhpComponent } from './php.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [PhpComponent],
  imports: [CommonModule, ClipboardModule],
})
export class PhpModule {}
