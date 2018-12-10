

import { MenuPrincipalPage } from './../menu-principal/menu-principal';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MenuHabitosPage } from '../menu-habitos/menu-habitos';

/**
 * Generated class for the Compromisohbt1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compromisohbt1',
  templateUrl: 'compromisohbt1.html',
})
export class Compromisohbt1Page {
  data : any;
  userData = {"id": window.localStorage.getItem('id'), "id_habito": 1 , "registro": "aceptohbt1"};
  loading:any;
  constructor(private navCtrl: NavController, private rest:RestProvider, private loadingCtrl:LoadingController, private toastCtrl:ToastController,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Compromisohbt1Page');
   
  }

 goToAcepto(){
   this.showLoader();
    this.rest.acepto(this.userData).then((result)=>{
      this.loading.dismiss();
      this.data = result;
      window.localStorage.setItem("actividad",this.data.actividad);
      console.log(this.data.exito, this.data.actividad);
      if(this.data.exito == "Ya has realizado la actividad del día de hoy"){
        this.presentToast("No puedes realizar esta actividad hoy ¡Vuelve mañana!");
        this.gotomenu();
      }else{
        this.presentToast("¡Listo! Hemos terminado por hoy, te esperamos mañana");
        this.gotomenu();
      }
      this.viewCtrl.dismiss();
    });
 }

gotomenu(){
  window.setTimeout(()=>this.navCtrl.setRoot(MenuPrincipalPage),3000);
}

 showLoader(){
  this.loading = this.loadingCtrl.create({
      content: 'Guardando...'
  });

  this.loading.present();
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
