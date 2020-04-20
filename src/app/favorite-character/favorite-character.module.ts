import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteCharacterPageRoutingModule } from './favorite-character-routing.module';

import { FavoriteCharacterPage } from './favorite-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteCharacterPageRoutingModule
  ],
  declarations: [FavoriteCharacterPage]
})
export class FavoriteCharacterPageModule {}
