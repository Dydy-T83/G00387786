import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // when i want to add a new page i need to do the path and the loadChildren after enter the command in the terminal : ionic g page marvel-movies
  {
    path: 'marvel-movies',
    loadChildren: () => import('./marvel-movies/marvel-movies.module').then( m => m.MarvelMoviesPageModule)
  },

  {
    path: 'avengers-movies',
    loadChildren: () => import('./avengers-movies/avengers-movies.module').then( m => m.AvengersMoviesPageModule)
  },
  {
    path: 'marvel-characters',
    loadChildren: () => import('./marvel-characters/marvel-characters.module').then( m => m.MarvelCharactersPageModule)
  },
  {
    path: 'favorite-character',
    loadChildren: () => import('./favorite-character/favorite-character.module').then( m => m.FavoriteCharacterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
