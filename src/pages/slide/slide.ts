import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, private screenOrientation:ScreenOrientation) {
    this.screenOrientation.lock('portrait');
  }
goToHome(){
 
  this.navCtrl.setRoot(LoginPage);
}
}
