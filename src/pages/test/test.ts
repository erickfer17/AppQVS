import { TestAutocontrolPage } from './../test-autocontrol/test-autocontrol';
import { TestSerfelizPage } from './../test-serfeliz/test-serfeliz';
import { TestDesayunarmasPage } from './../test-desayunarmas/test-desayunarmas';
import { TestDescansoadecuadoPage } from './../test-descansoadecuado/test-descansoadecuado';
import { TestActividadfisicaPage } from './../test-actividadfisica/test-actividadfisica';
import { TestBiencomerPage } from './../test-biencomer/test-biencomer';
import { TestActitudpositivaPage } from './../test-actitudpositiva/test-actitudpositiva';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';

import { IntrotestaguaPage } from '../introtestagua/introtestagua';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  loader:any;
  constructor(public navCtrl: NavController, platform:Platform, public loadingCrtl:LoadingController) {
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
  }

  goToTestAgua(){
    this.navCtrl.push(IntrotestaguaPage);
    
  }

  goToTestActitudPositiva(){
    this.navCtrl.push(TestActitudpositivaPage);
    
  }

  goToTestBienComer(){
    this.navCtrl.push(TestBiencomerPage);
  }

  goToActividadFisica(){
    this.navCtrl.push(TestActividadfisicaPage);
  }

  goToDescansoAdecuado(){
    this.navCtrl.push(TestDescansoadecuadoPage);
  }

  goToAutoControl(){
    this.navCtrl.push(TestAutocontrolPage);
  }

  goToDesayunarMas(){
    this.navCtrl.push(TestDesayunarmasPage);
  }

  goToSerFeliz(){
    this.navCtrl.push(TestSerfelizPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  presentLoading(){

    this.loader=this.loadingCrtl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }

}
