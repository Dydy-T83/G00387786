import { Component, OnInit } from '@angular/core';
import * as SoundboardMapping from '../../models/soundboard.mapping';
// Native
//import { MediaOriginal, MediaObject } from '@ionic-native/media';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.page.html',
  styleUrls: ['./soundboard.page.scss'],
})
export class SoundboardPage{

 /* private soundboardData: SoundboardMapping.SoundboardMap[];
  private file: MediaObject;

  constructor(public navCtrl: NavController, private media: MediaOriginal) {
    this.soundboardData = SoundboardMapping.SoundboardMock;
  }

  public playSound(ressource: string) {
    if (this.file) {
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create('./assets/' + ressource);
    this.file.play();
  }
*/
}
