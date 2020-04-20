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

  onSave(){
    console.log(this.myCharacter);
    this.storage.set("character", this.myCharacter);

  }

}
