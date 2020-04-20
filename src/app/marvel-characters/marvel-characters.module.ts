import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarvelCharactersPageRoutingModule } from './marvel-characters-routing.module';

import { MarvelCharactersPage } from './marvel-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarvelCharactersPageRoutingModule
  ],
  declarations: [MarvelCharactersPage]
})
export class MarvelCharactersPageModule {}
