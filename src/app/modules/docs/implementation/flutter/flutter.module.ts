import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlutterComponent } from './flutter.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [FlutterComponent],
  imports: [CommonModule, ClipboardModule],
})
export class FlutterModule {}
