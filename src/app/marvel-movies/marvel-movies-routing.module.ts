import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelMoviesPage } from './marvel-movies.page';

const routes: Routes = [
  {
    path: '',
    component: MarvelMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelMoviesPageRoutingModule {}
