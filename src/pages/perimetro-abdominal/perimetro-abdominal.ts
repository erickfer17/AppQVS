import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the PerimetroAbdominalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perimetro-abdominal',
  templateUrl: 'perimetro-abdominal.html',
})
export class PerimetroAbdominalPage {
  loader:any;
  fondoperimetro:string;
  nombre:string;
  perimetro:any;
  color:any;
  riesgo:string;
  lista:any[]=[];
  recomendacion:string;
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform, public screenOrientation:ScreenOrientation) {
    this.screenOrientation.lock('portrait');
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });

    this.nombre=window.localStorage.getItem('nombre');
    this.perimetro=window.localStorage.getItem('cintura');
   
    //Seleccionar fondos\
    if(window.localStorage.getItem('sexo')=="masculino"){
      this.fondoperimetro="./assets/imgs/fimch.jpg";
  }else if(window.localStorage.getItem('sexo')=="femenino"){
    this.fondoperimetro="./assets/imgs/fimcm.jpg";
  }

  //llenar lista
  this.lista =[{titulo:'Diabetes'}, 
    {titulo:'Presión arterial alta (hipertensión)'}, 
    {titulo:'Insuficiencia cardíaca'},
    {titulo:'Algunos tipos de cáncer'}, 
    {titulo:'Estrés'}, 
    {titulo:'Ansiedad'}, 
    {titulo:'Depresión'},
    {titulo:'Niveles altos de colesterol y triglicéridos en la sangre'},
    {titulo:'Niveles bajos de HDL (Colesterol bueno)'},
    {titulo:'Niveles altos de LDL (Colesterol malo)'},
    {titulo:'Síndrome metabólico'},
    {titulo:'Infartos al corazón'},
    {titulo:'Gastritis'},
    {titulo:'Reflujo gastroesofágico'}
    ];


  //color, y riesgo
  if(window.localStorage.getItem('sexo')=="femenino"){
    this.color='#FEE900';
    if(this.perimetro<80){
      this.riesgo='RIESGO BAJO';
      this.recomendacion='Tienes un RIESGO BAJO y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantenerte en niveles saludables. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
    }else if(this.perimetro >=80 && this.perimetro <=88){
      this.riesgo='RIESGO MODERADO';
      this.recomendacion='Te encuentras en un RIESGO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    }else if(this.perimetro > 88){
      this.riesgo='RIESGO ALTO';
      this.recomendacion='Te encuentras en un RIESGO ALTO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    }

  }else if(window.localStorage.getItem('sexo')=='masculino'){
    this.color='#FD0101'
    if(this.perimetro<90){
      this.riesgo='RIESGO BAJO';
      this.recomendacion='Tienes un RIESGO BAJO y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantenerte en niveles saludables. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
    }else if(this.perimetro >=90 && this.perimetro <=102){
      this.riesgo='RIESGO MODERADO';
      this.recomendacion='Te encuentras en un RIESGO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    }else if(this.perimetro > 102){
      this.riesgo='RIESGO ALTO';
      this.recomendacion='Te encuentras en un RIESGO ALTO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    }

  }

  console.log(this.lista);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerimetroAbdominalPage');
  }
  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }


  goToMenu(){
    this.navCtrl.setRoot(MenuPrincipalPage);
    this.navCtrl.push(EvaluacionPage);
  }
}
