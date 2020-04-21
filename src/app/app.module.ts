import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MarvelMoviesService} from './Services/marvel-movies.service'
//import {MediaOriginal} from '@ionic-native/media/ngx';
import {FormsModule} from '@angular/forms'
import {IonicStorageModule} from '@ionic/storage';//for Data Persistance
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

// Import the plugin at the top (along with other imports)
//import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,FormsModule, IonicStorageModule.forRoot(),IonicModule.forRoot(), AppRoutingModule, HttpClientModule],//We import httpClientModule to use the data from the url to print avengers movies...
  providers: [
    MarvelMoviesService,
    StatusBar,
    SplashScreen,
    Geolocation,
    FileOpener,
   // NativeAudio,
    // MediaOriginal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
