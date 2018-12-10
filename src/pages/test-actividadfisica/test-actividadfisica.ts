import { RestProvider } from './../../providers/rest/rest';
import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';

/**
 * Generated class for the TestActividadfisicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-actividadfisica',
  templateUrl: 'test-actividadfisica.html',
})
export class TestActividadfisicaPage {

  
  array:string []=["1- ¿Realizo al menos 30 minutos de actividad física al día?", 
  "2-	¿Incorporo a mi rutina diaria nuevas maneras de hacer actividad física (dejar el carro más lejos, caminar al trabajo, usar bicicleta como transporte, subir y bajar escaleras)?",
  "3-	¿Practico algún deporte o actividad física con mis hijos, familia o amigos? ",
  "4-	¿Realizo estiramientos de piernas y brazos varias veces al día?",
  "5- ¿Realizo ejercicio físico por lo menos tres días a la semana?",
  "6-	¿Practico actividad de tipo aeróbico (correr, andar en bicicleta, patinar, caminar, deportes, entre otros) al menos tres veces por semana?",
  "7- ¿Realizo actividades para el fortalecimiento de los grandes grupos musculares (lagartijas, abdominales, sentadillas, levantamiento de pesas)?",
  "8-	¿Realizo algún trabajo físico manual durante el día?",
  "9-	¿Realizo mi actividad física al aire libre y bajo la luz solar?",
  "10- ¿Evito estar sentado por más de dos horas seguidas?"];

imagen:string []=["./assets/imgs/actividadfisica1.png","./assets/imgs/actividadfisica2.png","./assets/imgs/actividadfisica3.png","./assets/imgs/actividadfisica4.png","./assets/imgs/actividadfisica5.png","./assets/imgs/actividadfisica6.png","./assets/imgs/actividadfisica7.png","./assets/imgs/actividadfisica8.png","./assets/imgs/actividadfisica9.png","./assets/imgs/actividadfisica10.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 4, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
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
    this.resultado=this.resultado+1;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==10){
    this.goToTest();
  }
  }
  
  Rara(){
   
    this.resultado=this.resultado+2;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==10){
    this.goToTest();
  }
  }
  

  Aveces(){   
    this.resultado=this.resultado+3;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==10){
      this.goToTest();
    }
  }

  Frecuentemente(){
    this.resultado=this.resultado+4;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==10){
      this.goToTest();
    }
  }

  Si(){
    this.resultado=this.resultado+5;
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
     this.test= { test:"Actividad Física",
       resultado:"¡Excelente!",
        contenido:'¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Actividad Física",
        resultado:"¡Muy Bueno!",
      contenido:'¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Actividad Física",
        resultado:"¡Bueno!",
      contenido:'¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Actividad Física",
        resultado:"¡Malo!",
      contenido:'Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Actividad Física",
        resultado:"¡Muy Malo!",
      contenido:'¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
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
