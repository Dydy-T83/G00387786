import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular'
import { Device } from '@ionic-native/device/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [BatteryStatus]
})
export class HomePage implements OnInit {
  myCharacter:string;
  long:number;
  lat:number;
 // theModel:string;
  batLvl:any;
  batStat:any;
  subscription:any;
  
   constructor(private storage:Storage,private batteryStatus: BatteryStatus,public navCtrl:NavController,private device: Device,private geolocation:Geolocation,private fileOpener: FileOpener,private document: DocumentViewer,private file: File,private platform:Platform) {}
  
  checkBatStatus(){
    
    this.subscription=this.batteryStatus.onChange().subscribe(
      (status)=>{
        console.log("enter");
        console.log(status.level, status.isPlugged);
        this.batLvl=status.level;
        if(status.isPlugged==true){
          this.batStat='Charging';
        }
        else {
          this.batStat='Unplugged';
        }
      }
    );
  }

  batCheck(){
    console.log("enter2");
    this.subscription.unsubscribe();
  }

   locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
//https://www.youtube.com/watch?v=k2iaGNApM9w
  openFileMethod(){
   let filePath=this.file.applicationDirectory+"www/assets";
   
   if(this.platform.is('android')){
     let fakeName=Date.now();
     this.file.copyFile(filePath,'Mobile_Apps_Project.pdf',this.file.dataDirectory, `${fakeName}.pdf`).then (result => {
        this.fileOpener.open(result.nativeURL,'application/pdf');
     });
   }
    else {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    this.document.viewDocument(`${filePath}/Mobile_Apps_Project.pdf`,'application/pdf', options);
   }
    
   /* this.fileOpener.open('assets/fileText/Mobile_Apps_Project.pdf', 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));
    /*this.fileOpener.showOpenWithDialog('assets/fileText/Mobile_Apps_Project.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));*/
  }

  //every time that you enter in the home page you did that
   ionViewWillEnter(){
     // this.storage.get to get a value from Ionic storage:
    this.storage.get("character").then(//"character" is the key to identify the value which is returned in a Promise
      (data)=>{
        this.myCharacter = data;// the string value "my character" take the data, the answer that we checked in the favorite-character.html and save thanks to
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
   }
   ngOnInit(){
    //var theModel = this.device.platform;
    //var string = device.manufacturer;
  }
}
