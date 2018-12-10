import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TestDesayunarmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-desayunarmas',
  templateUrl: 'test-desayunarmas.html',
})
export class TestDesayunarmasPage {

 
  array:string []=["1- ¿Tomo un desayuno saludable todos los días?", 
  "2-	¿Planeo el menú de desayunos y cenas de la semana basada en alimentos saludables?",
  "3-	¿Considero mi desayuno la comida más importante del día?",
  "4-	¿Dedico 30 minutos al día para ingerir mi desayuno?",
  "5- ¿Ceno por lo menos tres horas antes de dormir?",
  "6-	¿Prefiero cenar poco?",
  "7- ¿Comparto el desayuno en familia?",
  "8-	¿Prefiero no desayunar porque se me hace tarde?",
  "9-	¿Siento que ceno demasiado?",
  "10- ¿Desayuno como máximo una hora después de levantarme? "];

imagen:string []=["./assets/imgs/desayunarmas1.png","./assets/imgs/desayunarmas2.png","./assets/imgs/desayunarmas3.png","./assets/imgs/desayunarmas4.png","./assets/imgs/desayunarmas5.png","./assets/imgs/desayunarmas6.png","./assets/imgs/desayunarmas7.png","./assets/imgs/desayunarmas8.png","./assets/imgs/desayunarmas9.png","./assets/imgs/desayunarmas10.png"];
  i:any=0;
  pregunta:string=this.array[this.i];
  imagenagua:string=this.imagen[this.i];
  resultado:any=0;
  resultado2:any=0;
  resultado3:any=0;
  resultadotest:any=0;
  fechaActual = new Date();
  mensaje:any;
  loading:any;
  data:any;
  test={};
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 7, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
  loader:any;
  constructor(public navCtrl: NavController, platform:Platform,  public restprovider:RestProvider, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    /*  this.presentLoading();
/*platform.ready().then(()=>{
          this.loader.dismiss();
      });*/
    
  }

  No(){
    console.log(this.fechaActual);
      if( this.i == 7 || this.i ==8){
        this.resultado=this.resultado+5;
      }else{this.resultado=this.resultado+1;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
    if(this.i ==10){
      this.goToTest();
    }
    }
    
    Rara(){
     
        if( this.i == 7 || this.i ==8){
          this.resultado=this.resultado+4;
        }else{this.resultado=this.resultado+2;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==10){
          this.goToTest();
        }
    }
  
    Aveces(){
     
        if( this.i == 7 || this.i ==8){
          this.resultado=this.resultado+3;
        }else{this.resultado=this.resultado+3;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==10){
          this.goToTest();
        }
    }
  
    Frecuentemente(){
     
        if( this.i == 7 || this.i ==8){
          this.resultado=this.resultado+2;
        }else{this.resultado=this.resultado+4;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==10){
          this.goToTest();
        }
    }
  
    Si(){
     
        if( this.i == 7 || this.i ==8){
          this.resultado=this.resultado+1;
        }else{this.resultado=this.resultado+5;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        
        if(this.i ==10){
          this.goToTest();
        }
      }
  goToTest(){
    //this.navCtrl.push(TestPage);
   
    
    this.resultado=this.resultado-this.i;
    this.resultado2=(this.i*5)-this.i;
    this.resultado3=(this.resultado/this.resultado2);
    this.resultadotest=this.resultado3*100;
    window.localStorage.setItem('rtestagua',this.resultadotest);
    this.datosTest.resultado=this.resultadotest;

    this.registrartest()
      
     if(this.resultadotest >= 91){
     this.test= { test:"Desayunar Más y Cenar Menos",
       resultado:"¡Excelente!",
        contenido:"¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
        
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Desayunar Más y Cenar Menos",
        resultado:"¡Muy Bueno!",
      contenido:"¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
      
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Desayunar Más y Cenar Menos",
        resultado:"¡Bueno!",
      contenido:"¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
      
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Desayunar Más y Cenar Menos",
        resultado:"¡Malo!",
      contenido:"Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
      
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Desayunar Más y Cenar Menos",
        resultado:"¡Muy Malo!",
      contenido:"¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
      
      color:"#c40404"};
    }
      this.navCtrl.setRoot(EvaluacionPage);
      this.navCtrl.push(RtestaguaPage, this.test);
   
  }


  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }

//registro resultados del test
  registrartest(){
    console.log(this.datosTest);
    this.showLoader();
    this.restprovider.registrotestagua(this.datosTest).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.mensaje = this.data.exito;
      let men = this.data.mensaje;
      console.log(men);
      console.log(this.mensaje);
      console.log(window.localStorage.getItem('id'));
      if(this.mensaje=="Registro exitoso"){
        console.log(this.mensaje);
        this.presentToast(this.mensaje);
      }else if(this.mensaje=="POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS"){
        console.log(this.mensaje);
        this.presentToast(this.mensaje);
      } 
     
    }, (err) => {
      console.log(this.mensaje);
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestAguaPage');
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
