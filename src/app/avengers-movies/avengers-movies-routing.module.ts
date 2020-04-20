import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvengersMoviesPage } from './avengers-movies.page';

const routes: Routes = [
  {
    path: '',
    component: AvengersMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvengersMoviesPageRoutingModule {}
