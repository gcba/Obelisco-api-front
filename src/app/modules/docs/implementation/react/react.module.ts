import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactComponent } from './react.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [ReactComponent],
  imports: [CommonModule, ClipboardModule],
})
export class ReactModule {}
