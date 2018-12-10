import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { AguaPage } from '../agua/agua';
import { Habito1Page } from '../habito1/habito1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the CompromisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compromiso',
  templateUrl: 'compromiso.html',
})
export class CompromisoPage {
  fondo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {

    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fcompromiso.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fcompromisoh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fcompromiso.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fcompromisoh.jpg'
    }
    
  }


  goToCompromisoAgua(){
    this.navCtrl.setRoot(Habito1Page);
    this.navCtrl.push(AguaPage);

  }

}
