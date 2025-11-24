import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './home.page';
import { HeroComponent } from './components/hero/hero';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomePage,
    HeroComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }