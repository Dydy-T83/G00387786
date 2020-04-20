import { Component, OnInit } from '@angular/core';
import {AvengersMoviesService} from '../Services/avengers-movies.service'//we import service to use a method in this service
@Component({
  selector: 'app-avengers-movies',
  templateUrl: './avengers-movies.page.html',
  styleUrls: ['./avengers-movies.page.scss'],
})
export class AvengersMoviesPage implements OnInit {
  avengersMoviesData:any=[];
  constructor(private avengersMoviesService:AvengersMoviesService){

  }
  ngOnInit() {
    this.avengersMoviesService.GetAvengersMoviesData().subscribe( // we use GetAvengersMoviesData method  to get the data from the url in avengers-movies service file and to stock this data in property
      (data)=>{
        this.avengersMoviesData=data.Search;// we use that to stock this data in avengersMoviesData property that we print instead of the element that we wante to print in the html file 
        console.log(this.avengersMoviesData)
      }
    );
    
  }

}