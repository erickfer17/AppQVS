import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController } from 'ionic-angular';
import { EvaluacionImcPage } from '../evaluacion-imc/evaluacion-imc';
import { TestPage } from '../test/test';
import { LoginPage } from '../login/login';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { SaludPage } from '../salud/salud';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the EvaluacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html',
})
export class EvaluacionPage {
  loader:any;
  fondo:string;
  constructor(public navCtrl: NavController, platform:Platform, public loadingCrtl:LoadingController, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo='./assets/imgs/fevaluaciones.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fevaluacionesh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
    
    
  }

  goToSalud(){
    this.navCtrl.push(SaludPage);
  }

  goToIMC(){
    this.navCtrl.push(EvaluacionImcPage);
  }
  goToTest(){
    this.navCtrl.push(TestPage);
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fevaluaciones.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fevaluacionesh.jpg'
    }
    console.log('ionViewDidLoad EvaluacionPage');
  }

  cerrarsesion(){
    this.navCtrl.setRoot(LoginPage);
  }

  presentLoading(){

    this.loader=this.loadingCrtl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }
}
