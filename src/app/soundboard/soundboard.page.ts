import { Component, OnInit } from '@angular/core';
import * as SoundboardMapping from '../../models/soundboard.mapping';
// Native
//import { MediaOriginal, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { NavController, NavParams, Platform } from '@ionic/angular';
@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.page.html',
  styleUrls: ['./soundboard.page.scss'],
})
export class SoundboardPage{

 // private soundboardData: SoundboardMapping.SoundboardMap[];
  //private file: NativeAudio;
    //this.soundboardData = SoundboardMapping.SoundboardMock;
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public platform: Platform, 
      private nativeAudio: NativeAudio) {
  
        // The Native Audio plugin can only be called once the platform is ready
        this.platform.ready().then(() => { 
            console.log("platform ready");
  
            // This is used to unload the track. It's useful if you're experimenting with track locations
            this.nativeAudio.unload('trackID').then(function() {
                console.log("unloaded audio!");
            }, function(err) {
                console.log("couldn't unload audio... " + err);
            });
  
            // 'trackID' can be anything
            this.nativeAudio.preloadComplex('trackID', 'assets/audio/test.mp3', 1, 1, 0).then(function() {
                console.log("audio loaded!");
            }, function(err) {
                console.log("audio failed: " + err);
            });
        });
    }

    playAudio() {
      console.log("playing audio");

      this.nativeAudio.play('trackID').then(function() {
          console.log("playing audio!");
      }, function(err) {
          console.log("error playing audio: " + err);
      });
}

 /* public playSound(ressource: string) {
    if (this.file) {
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create('./assets/' + ressource);
    this.file.play();
  }*/

}
