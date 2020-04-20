import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelMoviesService {
  
  constructor() { }
  onCalculate(movies_seen:number):number{
    let movies_yet_tosee:number
    //console.log('user name:', this.login.username );
    movies_yet_tosee=23-movies_seen;
    return movies_yet_tosee;
    //console.log('The number of movies that you must to see is ', this.movies_yet_tosee );
  
  }

}
