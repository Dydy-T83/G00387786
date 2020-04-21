import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MarvelMoviesService} from '../Services/marvel-movies.service'
@Component({
  selector: 'app-marvel-movies',
  templateUrl: './marvel-movies.page.html',
  styleUrls: ['./marvel-movies.page.scss'],
})
export class MarvelMoviesPage implements OnInit {
yet_tosee:number;//variable that we export on the html (data binding)
seen:number;// variable in arguments inside the function thanks to the ion input in the html code
  constructor(private marvelMoviesService:MarvelMoviesService) { }

  ngOnInit() {
 }
 //we use this method in the marvel-movies service by sending as argument the incoming value that return the number that you need to see. 
  onCalculate(){
    this.yet_tosee=this.marvelMoviesService.onCalculate(this.seen);
    console.log(this.yet_tosee);
  }
  

  /*setLoginData() {
    this.login.username = 'edupala.com';
    this.login.password = '12345';
  }*/
}
