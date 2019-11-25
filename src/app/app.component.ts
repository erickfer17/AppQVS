<<<<<<< HEAD
import { InstruccionesPage } from './../pages/instrucciones/instrucciones';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SlidePage } from '../pages/slide/slide';
import {SaludoPage} from '../pages/saludo/saludo';
import {Storage} from '@ionic/storage';
import { TestAguaPage } from '../pages/test-agua/test-agua';
import { TestPage } from '../pages/test/test';
import { EvaluacionPage } from '../pages/evaluacion/evaluacion';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';

=======
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
>>>>>>> Initial commit

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = SlidePage;
  loader: any;

  constructor(platform: Platform,public loadingCtrl: LoadingController, public storage: Storage) {
    this.presentLoading();
    platform.ready().then(() => {

      if (window.localStorage.getItem("token") != null) {
        this.rootPage =MenuPrincipalPage;
        this.loader.dismiss();
    } else {
      this.storage.get('slideshow').then((result) => {
        
               if(result){
                 this.rootPage = SlidePage;
                 
               } else {
                 this.rootPage = SlidePage;
                 this.storage.set('slideshow', true);
               }
        
               this.loader.dismiss();
        
             });
    }

     
    
    });
  }
  presentLoading() {
    
       this.loader = this.loadingCtrl.create({
         content: "Autenticando..."
       });
    
       this.loader.present();
    
     }
=======
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
>>>>>>> Initial commit
}
