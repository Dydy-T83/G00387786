import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myCharacter:string;
  long:number;
  lat:number;
   constructor(private storage:Storage,private geolocation:Geolocation,private fileOpener: FileOpener) {}
   
   locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  openFileMethod(){
    this.fileOpener.open('assets/fileText/Mobile_Apps_Project.pdf', 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));
    /*this.fileOpener.showOpenWithDialog('assets/fileText/Mobile_Apps_Project.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));*/
  }

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
