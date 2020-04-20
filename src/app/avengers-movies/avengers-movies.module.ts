import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvengersMoviesPageRoutingModule } from './avengers-movies-routing.module';

import { AvengersMoviesPage } from './avengers-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvengersMoviesPageRoutingModule
  ],
  declarations: [AvengersMoviesPage]
})
export class AvengersMoviesPageModule {}
