import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderImagesComponent } from './header-images/header-images.component';
import { CodeViewerComponent } from 'src/app/components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [HeaderComponent, HeaderImagesComponent],
  imports: [CommonModule, HeaderRoutingModule, CodeViewerComponent],
})
export class HeaderModule {}
