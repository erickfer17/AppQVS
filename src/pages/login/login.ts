import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, ToastController, ViewController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { SaludoPage } from '../saludo/saludo';
import { RegistroPage } from '../registro/registro';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data : any;
  userData = {"password": "", "correo": ""};
  loading: any;
  constructor(public navCtrl: NavController, public restprovider:RestProvider, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation: ScreenOrientation) {
     
      this.screenOrientation.onChange().subscribe(
        () => {
            console.log(this.screenOrientation.type);
        }
     );
  }
 

  doLogin() {
    this.showLoader();
    this.restprovider.login(this.userData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      console.log(this.data.nombre);
      window.localStorage.setItem('id',this.data.id);
      window.localStorage.setItem('nombre', this.data.nombre);
      window.localStorage.setItem('sexo', this.data.sexo);
      window.localStorage.setItem('correo', this.data.correo);
      window.localStorage.setItem('password', this.data.password);
     
      if(localStorage.getItem('correo')==this.userData.correo && localStorage.getItem('password')==this.userData.password){
        this.navCtrl.setRoot(SaludoPage);
        window.localStorage.setItem('token',this.data.token);
      }else{
        this.presentToast('Error: Correo/Usuario incorrectos');
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  

goRegistro(){
this.navCtrl.push(RegistroPage);  

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  
  }


  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
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
