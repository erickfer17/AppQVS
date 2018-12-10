import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the SaludPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {
  estado:boolean;
  fondo:string;
  loader:any=false;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fintroestadodesalud.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fintroestadodesaludh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    platform.ready().then(()=>{
      this.loader.dismiss();
      
    });
    
  }
  ionViewWillEnter(){
    this.estado=false;
  }
  ionViewDidEnter(){
    this.estado=true;
  }
  ionViewWillLeave(){
    this.estado=false;
  }
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary'|| this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/fintroestadodesalud.jpg'
    }else if (this.screenOrientation.type=='landscape-primary'|| this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/fintroestadodesaludh.jpg'
    }
    console.log('ionViewDidLoad SaludPage');
    this.estado=false;
  }

  presentLoading(){
    this.loader=this.loadingCtrl.create({
      content:'Cargando...'
    });
    this.loader.present();

  }

}
