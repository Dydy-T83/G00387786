import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarvelMoviesPageRoutingModule } from './marvel-movies-routing.module';

import { MarvelMoviesPage } from './marvel-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarvelMoviesPageRoutingModule
  ],
  declarations: [MarvelMoviesPage]
})
export class MarvelMoviesPageModule {}
