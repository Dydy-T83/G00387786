//to had a service I enter this command in the terminal : ionic g s Services/avengers-movies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvengersMoviesService {
 
  constructor(private httpClient:HttpClient) { }
//method that return the data from the url (here it is poster movies...)
  GetAvengersMoviesData():Observable<any>{
    return this.httpClient.get ('http://www.omdbapi.com/?apikey=ac3168fa&s=%27avengers%27');
  }
}
