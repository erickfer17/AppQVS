import { InstruccionesPage } from './../instrucciones/instrucciones';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {
  fondo:string;
  nombre:string;
  sexo:string;
  loader: any;
  data:any;
  loading:any;
  userData = {"password": window.localStorage.getItem('password'), "correo":window.localStorage.getItem("correo")};
  constructor(public platform:Platform, public navCtrl: NavController,  public loadingCtrl:LoadingController, public restprovider:RestProvider, 
    private toastCtrl: ToastController) {
   this.presentLoading();
   this.doLogin();
   platform.ready().then(()=>{
    this.sexo=window.localStorage.getItem('sexo');
    this.nombre=window.localStorage.getItem('nombre');
    console.log(this.sexo);
    
    if (this.sexo=="masculino") {
      this.fondo='./assets/imgs/fbh.jpg';
      
    }else if (this.sexo=='femenino') {
      this.fondo='./assets/imgs/fbm.jpg';
      
    }
    console.log(this.fondo);
  });
  this.loader.dismiss();
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaPage');
  }

  presentLoading() {
    
    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
 
    this.loader.present();
 
  }


  doLogin() {
    this.showLoader();
    this.restprovider.login(this.userData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      console.log(this.data.nombre);
      window.localStorage.setItem('id',this.data.id);
      
      }, (err) => {
      this.loading.dismiss();
     
    });
  }


  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
  }

 
goToInstrucciones(){
  this.navCtrl.setRoot(InstruccionesPage);
}

}
