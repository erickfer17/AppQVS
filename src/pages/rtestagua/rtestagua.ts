import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { Compromisohbt1PageModule } from '../compromisohbt1/compromisohbt1.module';
import { CompromisoPage } from '../compromiso/compromiso';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the RtestaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtestagua',
  templateUrl: 'rtestagua.html',
})
export class RtestaguaPage {
  resultado:string;
  promedio:any=window.localStorage.getItem('rtestagua');
  color:any;
  contenido:any;
  fondo:string;
  loader:any;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform,private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/frtestagua.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/frtestaguah.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });

    if(this.promedio >= 91){
      this.resultado = "¡Excelente!";
      this.color = "#185417";
      this.contenido ="¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 91 && this.promedio >=81){
      this.resultado = "¡Muy Bueno!";
      this.color = "#458f31"; 
      this.contenido ="¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual). ";
    }else  if(this.promedio < 81 && this.promedio >=71){
      this.resultado = "¡Bueno!";
      this.color = "#e1c206";
      this.contenido ="¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 71 && this.promedio >=61){
      this.resultado = "¡Malo!";
      this.color = "#d54b00";
      this.contenido ="Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }else  if(this.promedio < 61 ){
      this.resultado = "¡Muy Malo!";
      this.color = "#c40404";
      this.contenido ="¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
    }
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/frtestagua.jpg'
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/frtestaguah.jpg'
    }
    console.log('ionViewDidLoad RtestaguaPage');
  }

  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPrincipalPage);
    if(window.sessionStorage.getItem("consulta")=='nuevo'){
    this.navCtrl.push(CompromisoPage);
    }else{
      this.navCtrl.push(EvaluacionPage);
    }
  }

}
