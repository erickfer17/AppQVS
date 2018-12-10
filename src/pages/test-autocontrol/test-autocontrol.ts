import { RestProvider } from './../../providers/rest/rest';
import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';

/**
 * Generated class for the TestAutocontrolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-autocontrol',
  templateUrl: 'test-autocontrol.html',
})
export class TestAutocontrolPage {

  array:string []=["1- ¿Soy moderado en la cantidad de porciones de alimentos que consumo durante el día?", 
  "2-	¿Soy moderado en la cantidad de porciones de bebidas que consumo durante el día?",
  "3-	¿Evito el consumo de tabaco?",
  "4-	¿Evito el consumo de alimentos no nutritivos (frituras, bebidas azucaradas, grasas saturadas, harinas refinadas, embutidos, alimentos altos en sodio y azúcar)?",
  "5- ¿Evito el consumo de bebidas embriagantes?",
  "6-	¿Distribuyo mi tiempo en las diferentes actividades del día para llevar una vida balanceada?",
  "7- ¿Evito el consumo de alimentos entre cada comida?",
  "8-	¿Evito consumir bebidas azucaradas entre cada comida?",
  "9-	¿Me sujeto a un presupuesto de gastos mensuales de acuerdo a mis ingresos?",
  "10- ¿Cuido el medio ambiente que me rodea tirando la basura y desechos en su respectivo bote?",
  "11- ¿Evito cualquier tipo de adicciones (drogas, pornografía, juegos, internet, aparatos electrónicos)?",
  "12- ¿Tengo la fuerza de voluntad necesaria para llevar una vida más saludable?"];

imagen:string []=["./assets/imgs/autocontrol1.png","./assets/imgs/autocontrol2.png","./assets/imgs/autocontrol3.png","./assets/imgs/autocontrol4.png","./assets/imgs/autocontrol5.png","./assets/imgs/autocontrol6.png","./assets/imgs/autocontrol7.png","./assets/imgs/autocontrol8.png","./assets/imgs/autocontrol9.png","./assets/imgs/autocontrol10.png","./assets/imgs/autocontrol11.png","./assets/imgs/autocontrol12.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 6, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
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
  if(this.i ==12){
    this.goToTest();
  }
  }
  
  Rara(){
   
    this.resultado=this.resultado+2;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==12){
    this.goToTest();
  }
  }
  

  Aveces(){   
    this.resultado=this.resultado+3;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==12){
      this.goToTest();
    }
  }

  Frecuentemente(){
    this.resultado=this.resultado+4;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==12){
      this.goToTest();
    }
  }

  Si(){
    this.resultado=this.resultado+5;
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
    if(this.i ==12){
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
     this.test= { test:"Auto-Control",
       resultado:"¡Excelente!",
        contenido:" ¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. "  ,
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Auto-Control",
        resultado:"¡Muy Bueno!",
      contenido:" ¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ",
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Auto-Control",
        resultado:"¡Bueno!",
      contenido:"¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.  "  ,
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Auto-Control",
        resultado:"¡Malo!",
      contenido:" Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.  ",
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Auto-Control",
        resultado:"¡Muy Malo!",
      contenido:" ¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El ´Auto-control´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. "  ,
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
