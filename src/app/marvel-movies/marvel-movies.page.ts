import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MarvelMoviesService} from '../Services/marvel-movies.service'
@Component({
  selector: 'app-marvel-movies',
  templateUrl: './marvel-movies.page.html',
  styleUrls: ['./marvel-movies.page.scss'],
})
export class MarvelMoviesPage implements OnInit {
yet_toosee:number;
seen:number;
  constructor(private marvelMoviesService:MarvelMoviesService) { }

  ngOnInit() {
 }
  onCalculate(){
    this.yet_toosee=this.marvelMoviesService.onCalculate(this.seen);
    console.log(this.yet_toosee);
  }
  

  /*setLoginData() {
    this.login.username = 'edupala.com';
    this.login.password = '12345';
  }*/
}
