import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { LoginPage } from '../login/login';
import { MenuHabitosPage } from '../menu-habitos/menu-habitos';
import { RestProvider } from '../../providers/rest/rest';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the MenuPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {
  loader:any;
  userData ={"id":"","registro":"consultaAct"};
  data:any;
  fondo:string;
  constructor(public navCtrl: NavController, platform:Platform, public loadingCtrl:LoadingController, public restProvider: RestProvider, private screenOrientation:ScreenOrientation) {
  

    this.screenOrientation.unlock();
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary'|| this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/fmenuprincipal.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fmenuprincipalh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
   
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
   
    
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fmenuprincipal.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fmenuprincipalh.jpg'
    }
    console.log(this.screenOrientation.type);

    console.log('ionViewDidLoad MenuPrincipalPage');
    this.userData.id=window.localStorage.getItem("id");
    this.restProvider.acepto(this.userData).then((result) => {
      this.data = result;
      window.localStorage.setItem("actividad",this.data.actividad);
    }, (err) => {
      console.log(err);
    });
  }

  goToEvaluacion(){
    this.navCtrl.push(EvaluacionPage);
  }

  cerrarsesion(){
    this.navCtrl.setRoot(LoginPage);
    window.localStorage.removeItem('token');
  }

  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }

goToHabitos(){
  this.navCtrl.push(MenuHabitosPage);
}

}
