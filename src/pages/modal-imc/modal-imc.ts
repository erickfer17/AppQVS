import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Content } from 'ionic-angular';
import { ResultadoImcPage } from '../resultado-imc/resultado-imc';

/**
 * Generated class for the ModalImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-imc',
  templateUrl: 'modal-imc.html',
})
export class ModalImcPage {
  IMC = {"peso": "", "talla": "","cintura": "", "sexo": ""};
  public loader:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController, public loadingCtrl:LoadingController) {
  }
 

  calcularIMC(){
    let condicion:string;
    let riesgo:string;
    let peso:any=this.IMC.peso;
    let talla:any=this.IMC.talla;
    let cintura:any=this.IMC.cintura;
    let sexo=this.IMC.sexo;

    //calcular imc
    talla = talla * talla;
    let resultadoIMC:any=peso/talla;
 

    //calcular condicion IMC
    if (resultadoIMC<18.5){
      condicion="BAJO PESO";
    } else if(resultadoIMC>=18.5 && resultadoIMC <= 24.99){
      condicion="PESO NORMAL";
    } else if(resultadoIMC>=25 && resultadoIMC<=29.99){
      condicion="SOBREPESO";
    }else if(resultadoIMC>=30 && resultadoIMC<=34.99){
      condicion="OBESIDAD MODERADA";
    }else if(resultadoIMC>=35 && resultadoIMC<=39.99){
      condicion="OBESIDAD SEVERA";
    }else if(resultadoIMC>=40){
      condicion="OBESIDAD MÓRBIDA";
    }

    //calcular riesgo segun medida de cintura y sexo
    if (sexo=="masculino" && cintura<90){
      riesgo="RIESGO BAJO";
    } else if(sexo=="masculino" && cintura>=90 && cintura <= 102){
      riesgo="RIESGO MODERADO";
    } else if(sexo=="masculino" && cintura>102){
      riesgo="RIESGO ALTO";
    }

    if (sexo=="femenino" && cintura<80){
      riesgo="RIESGO BAJO";
    } else if(sexo=="femenino" && cintura>=80 && cintura <= 88){
      riesgo="RIESGO MODERADO";
    } else if(sexo=="femenino" && cintura>88){
      riesgo="RIESGO ALTO";
    }

    //guardo las variables en variables del sistema
    window.localStorage.setItem('imc',resultadoIMC);
    window.localStorage.setItem('condicion', condicion);
    window.localStorage.setItem('riesgo',riesgo);
    window.localStorage.setItem('cintura',cintura);
    this.goToResultadoIMC();
  }

  goToResultadoIMC(){
   
   
      this.navCtrl.push(ResultadoImcPage);
    
  }

  presentloading(){
    this.loader= this.loadingCtrl.create({
      content : 'Cargando...'
    })
    this.loader.present();
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalImcPage');
  }

}
