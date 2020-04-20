import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myCharacter:string;
  
   constructor(private storage:Storage) {}
   ionViewWillEnter(){
    this.storage.get("character").then(
      (data)=>{
        this.myCharacter = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
   }
   ngOnInit(){
    
  }
}
