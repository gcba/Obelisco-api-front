import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { FooterElementComponent } from './components/footer-element/footer-element.component';
import { TogglerModule } from './components/toggler/toggler.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './modules/about/about.component';
import { DocsComponent } from './modules/docs/docs.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxObeliscoModule } from 'ngx-obelisco-example/ngx-obelisco';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    DocsComponent,
    FooterElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    HighlightModule,
    SpinnerModule,
    NgxObeliscoModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
