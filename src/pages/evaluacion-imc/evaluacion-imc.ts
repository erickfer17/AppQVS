import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, LoadingController, ViewController } from 'ionic-angular';
import { ModalImcPage } from '../modal-imc/modal-imc';

/**
 * Generated class for the EvaluacionImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion-imc',
  templateUrl: 'evaluacion-imc.html',
})
export class EvaluacionImcPage {
  loader:any;
  constructor(public navCtrl: NavController,  private modal:ModalController, platform:Platform, public loadingCrtl:LoadingController, public viewCtrl:ViewController) {
    this.presentLoading();
    platform.ready().then(()=>{
      this.loader.dismiss();
    });
    
  }
goToCalculoIMC(){
  let modalIMC = this.modal.create(ModalImcPage);
  modalIMC.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluacionImcPage');
  }

presentLoading(){
  this.loader = this.loadingCrtl.create({
    content:'Cargando...'
  });
  this.loader.present();
}

}
