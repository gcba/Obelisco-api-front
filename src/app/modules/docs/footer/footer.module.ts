import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { FooterRoutingModule } from './footer-routing.module';
import { ImagesComponent } from './images/images.component';
import { PhonesComponent } from './phones/phones.component';
import { LinksComponent } from './links/links.component';
import { NetworksComponent } from './networks/networks.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ClipboardModule } from 'ngx-clipboard';
import { CodeViewerComponent } from '../../../components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    AllComponent,
    ImagesComponent,
    PhonesComponent,
    LinksComponent,
    NetworksComponent,
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    SpinnerModule,
    ClipboardModule,
    CodeViewerComponent,
  ],
})
export class FooterModule {}
