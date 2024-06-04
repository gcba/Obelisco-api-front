import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [JavascriptComponent],
  imports: [CommonModule, ClipboardModule],
})
export class JavascriptModule {}
