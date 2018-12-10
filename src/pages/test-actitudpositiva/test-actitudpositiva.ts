import { RestProvider } from './../../providers/rest/rest';
import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';

/**
 * Generated class for the TestActitudpositivaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-actitudpositiva',
  templateUrl: 'test-actitudpositiva.html',
})
export class TestActitudpositivaPage {

  array:string []=["1- ¿Comparto pensamientos y emociones positivas con mis seres queridos?", 
  "2-	¿Veo el lado positivo de las situaciones?",
  "3-	¿Reconozco las buenas cualidades en los demás?",
  "4-	¿Le expreso a las personas las buenas cualidades que observo en ellos?",
  "5- ¿Me agrada rodearme de personas positivas?",
  "6-	¿Me tranquilizo antes de responder cuando estoy enojado?",
  "7- ¿Mantengo una actitud positiva durante el día?",
  "8-	¿Utilizo palabras positivas y apropiadas al comunicarme con las demás personas?",
  "9-	¿Soy optimista en mi forma de ver la vida?",
  "10- ¿Veo los momentos difíciles como una oportunidad de crecer y mejorar?",
  "11- ¿Me siento capaz de enfrentar los problemas de la vida cuando le pido a Dios fuerza y sabiduría?",
  "12- ¿Soy agradecido con Dios por las bendiciones que recibo?",
  "13- ¿Soy agradecido con las personas que me rodean?"];

imagen:string []=["./assets/imgs/actitudpositiva1.png","./assets/imgs/actitudpositiva2.png","./assets/imgs/actitudpositiva3.png","./assets/imgs/actitudpositiva4.png","./assets/imgs/actitudpositiva5.png","./assets/imgs/actitudpositiva6.png","./assets/imgs/actitudpositiva7.png","./assets/imgs/actitudpositiva8.png","./assets/imgs/actitudpositiva9.png","./assets/imgs/actitudpositiva10.png","./assets/imgs/actitudpositiva11.png","./assets/imgs/actitudpositiva12.png","./assets/imgs/actitudpositiva13.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 2, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
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
  if(this.i ==13){
    this.goToTest();
  }
  }
  
  Rara(){
   
    this.resultado=this.resultado+2;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==13){
    this.goToTest();
  }
  }
  

  Aveces(){   
    this.resultado=this.resultado+3;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==13){
      this.goToTest();
    }
  }

  Frecuentemente(){
    this.resultado=this.resultado+4;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==13){
      this.goToTest();
    }
  }

  Si(){
    this.resultado=this.resultado+5;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==13){
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
     this.test= { test:"Actitud Positiva",
       resultado:"¡Excelente!",
        contenido:"¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Actitud Positiva",
        resultado:"¡Muy Bueno!",
      contenido:"¡Muy bien!, muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.",
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Actitud Positiva",
        resultado:"¡Bueno!",
      contenido:"¡Bien! Algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Actitud Positiva",
        resultado:"¡Malo!",
      contenido:"Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.",
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Actitud Positiva",
        resultado:"¡Muy Malo!",
      contenido:"¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
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
