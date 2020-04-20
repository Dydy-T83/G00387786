import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelCharactersPage } from './marvel-characters.page';

const routes: Routes = [
  {
    path: '',
    component: MarvelCharactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelCharactersPageRoutingModule {}
