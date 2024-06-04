import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxObeliscoModule } from 'ngx-obelisco-example/ngx-obelisco';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NgxObeliscoModule, RouterModule],
})
export class HomeModule {}
