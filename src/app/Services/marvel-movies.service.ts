import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelMoviesService {
  
  constructor() { }
  onCalculate(movies_seen:number):number{// function that we explain on the marvel-movies.ts
    let movies_yet_tosee:number
    movies_yet_tosee=23-movies_seen;
    return movies_yet_tosee;
  }

}
