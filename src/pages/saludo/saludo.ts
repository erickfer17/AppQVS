import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest'
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';

/**
 * Generated class for the SaludoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saludo',
  templateUrl: 'saludo.html',
})
export class SaludoPage {
  imagen:string;
  nombre:string;
  loader:any;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, public rest:RestProvider,platform:Platform) {
    this.presentLoading();
    platform.ready().then(()=>{


    
    console.log(window.localStorage.getItem('sexo'));
    this.nombre=window.localStorage.getItem('nombre');
    if(window.localStorage.getItem("sexo")=='masculino'){
      
      this.imagen="./assets/imgs/nino.png";
     }else if(window.localStorage.getItem("sexo")=='femenino'){
      this.imagen="./assets/imgs/nina.png";
      
     }
     this.loader.dismiss();
    });
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPrincipalPage);
  }

  presentLoading(){
    this.loader=this.loadingCtrl.create({
      content:'Cargando...'
    });
    this.loader.present();

  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SaludoPage');
  }

}
