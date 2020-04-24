import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular'
//import { Device } from '@ionic-native/device/ngx';
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
  
  batLvl:any;
  batStat:any;
  subscription:any;
  
   constructor(private storage:Storage,private batteryStatus: BatteryStatus,public navCtrl:NavController,private geolocation:Geolocation,private fileOpener: FileOpener,private document: DocumentViewer,private file: File,private platform:Platform) {}
  //for the Battery Status plugin i think that works only mobile simulator despite that write on plugin presentation that works in browser
  checkBatStatus(){
    this.subscription=this.batteryStatus.onChange().subscribe(//we monitor the battery
      (status)=>{//status : All events in this plugin return an object with the following properties
        console.log(status.level, status.isPlugged); //level: The battery charge percentage (0-100). (Number) 
        this.batLvl=status.level;//isPlugged: A boolean that indicates whether the device is plugged in. (Boolean)
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
    this.subscription.unsubscribe();// //we stop to monitor the battery
  }

   locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  openFileMethod(){
    //here we use the plugin File for all platforms 
   let filePath=this.file.applicationDirectory+"www/assets";//to read where the file is installed and stock that in string variable
   //for android we use the plugin File Opener 
   if(this.platform.is('android')){
     let fakeName=Date.now();//Enables basic storage and retrieval of dates and times to stock the fake url to read the pdf on android
     this.file.copyFile(filePath,'Mobile_Apps_Project.pdf',this.file.dataDirectory, `${fakeName}.pdf`).then (result => {//we past the real pdf in the fake pdf and after we read this fake pdf
        this.fileOpener.open(result.nativeURL,'application/pdf');//we open and read the pdf
     });
   }
    else { //for iOS and Window we use the plugin View Document
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    this.document.viewDocument(`${filePath}/Mobile_Apps_Project.pdf`,'application/pdf', options); // we will open the url (first argument), the type of this file is pdf (second argument) and the option of the document
   }
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
        console.log(error);//to print on the console if we catch an error
      }
    );
   }
   ngOnInit(){
    
  }
}
