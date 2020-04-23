import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-favorite-character',
  templateUrl: './favorite-character.page.html',
  styleUrls: ['./favorite-character.page.scss'],
})
export class FavoriteCharacterPage implements OnInit {
  myCharacter:string;
  constructor(private storage:Storage) { }

  ngOnInit() {
  }
  //method that uses the Data Persistance
  onSave(){
    console.log(this.myCharacter);
    this.storage.set("character", this.myCharacter);//this.myCharacter is the variable that we save thanks to storage.set and that we can use in the Home page
    //storage.set : "character" is the parameter key to identify this value and this.myCharacter is the param value for this key.
  }

}
