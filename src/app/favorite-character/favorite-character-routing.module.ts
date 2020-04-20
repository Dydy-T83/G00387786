import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteCharacterPage } from './favorite-character.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteCharacterPageRoutingModule {}
