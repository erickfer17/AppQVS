import { Actividadhbt1Page } from './../actividadhbt1/actividadhbt1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { IntrotestaguaPage } from '../introtestagua/introtestagua';
import { RestProvider } from '../../providers/rest/rest';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the Habito1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habito1',
  templateUrl: 'habito1.html',
})
export class Habito1Page {
  loader: any;
  dia:any;
  loading: any;
  data: any;
  estado: boolean;
  fondo:string;
  userData = { "id": "", "id_habito": "1", "registro": "actualizafecha" };
  constructor(public navCtrl: NavController, public platform: Platform, public restprovider: RestProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation:ScreenOrientation) {
  
      this.screenOrientation.onChange().subscribe(
        () => {
            
            if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
              this.fondo='./assets/imgs/fmenuhabito.jpg'
            }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
              this.fondo='./assets/imgs/fmenuhabitoh.jpg'
            }
            console.log(this.screenOrientation.type);
        }
     );


  }


  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fmenuhabito.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fmenuhabitoh.jpg'
    }
    console.log('ionViewDidLoad Habito1Page');

  }
  //consulta status del usuario si es nuevo o si ya ha entrado  y actualiza la fecha de entrada a la aplicacion y muestra el estado para lanzar tooltip, muestra toast si ya ha realizado el usuario del dia de hoy
  ionViewDidEnter() {
    this.userData.id = window.localStorage.getItem("id");
    this.restprovider.registrotestagua(this.userData).then((result) => {

      this.data = result;
      window.localStorage.setItem("actividad", this.data.actividad);
      this.dia=this.data.actividad;
      console.log(window.localStorage.getItem("actividad"));
      if (this.data.consulta == '¡Ya haz realizado la actividad del día de hoy!') {
        this.estado = false
        this.presentToast(this.data.consulta);

      } else if (this.data.consulta == 'nuevo') {
        this.estado = true;
        console.log(this.data.consulta);
        window.sessionStorage.setItem("consulta", this.data.consulta);

      } else {
        this.estado = false
      }

    }, (err) => {

      this.presentToast(err);
    });

  }

  ionViewWillLeave() {
    this.estado = false;
  }

  ionViewWillenter(platform: Platform) {
    this.estado = false;
    this.presentLoading();
    platform.ready().then(() => {
      this.loader.dismiss();
    });

  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: 'Cargando...'

    });
    this.loader.present();
  }
  goToTest() {


    this.navCtrl.push(IntrotestaguaPage);

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

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Guardando...'
    });

    this.loading.present();
  }
  //asignar actividades a los botones actividades
  goToActividad1() {
    
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 0 });

  }
  goToActividad2() {
    if(this.dia>=1 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 1 });
    }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  goToActividad3() {
    if(this.dia >=2 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 2 });
    }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  goToActividad4() {
    if(this.dia >=3 ){
      this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 3, "consulta" : this.data.consulta });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  goToActividad5() {
    if(this.dia >=4 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 4 });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  goToActividad6() {
    if(this.dia >=5 ){
    
      this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 5 });
    
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  goToActividad7() {
    if(this.dia >=6 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 6 });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }

}
