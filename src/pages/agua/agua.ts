import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompromisoPage } from '../compromiso/compromiso';
import { Actividadhbt1Page } from '../actividadhbt1/actividadhbt1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { getOrCreateContainerRef } from '@angular/core/src/render3/di';

/**
 * Generated class for the AguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})
export class AguaPage {
  fondo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {
    this.fondo='./assets/imgs/fagua.jpg';
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fagua.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/faguah.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
   this.goToHbt();
  }



  goToHbt(){
    window.setTimeout(()=>this.navCtrl.setRoot(Actividadhbt1Page),25000);
  }
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
      this.fondo='./assets/imgs/fagua.jpg'
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/faguah.jpg'
    }
  
  }

}
