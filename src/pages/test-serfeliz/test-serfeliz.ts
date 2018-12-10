import { RestProvider } from './../../providers/rest/rest';
import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';

/**
 * Generated class for the TestSerfelizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-serfeliz',
  templateUrl: 'test-serfeliz.html',
})
export class TestSerfelizPage {

  array:string []=["1- ¿Disfruto de momentos agradables en el día?", 
  "2-	¿Me considero una persona feliz?",
  "3-	¿Tengo una buena relación con Dios?",
  "4-	¿Mantengo una comunicación constante con Dios mediante la oración o la meditación?",
  "5- ¿Doy apoyo a las personas que lo necesitan?",
  "6-	¿Doy abrazos a los miembros de mi familia y/o amigos?",
  "7- ¿Afronto mis problemas confiando plenamente en la dirección de Dios?",
  "8-	¿Participo en un grupo de apoyo donde me siento querido y aceptado?",
  "9-	¿Reflexiono en la Palabra de Dios al menos 15 minutos al día?",
  "10- ¿Comparto mi alegría con las demás personas?"];

imagen:string []=["./assets/imgs/serfeliz1.png","./assets/imgs/serfeliz2.png","./assets/imgs/serfeliz3.png","./assets/imgs/serfeliz4.png","./assets/imgs/serfeliz5.png","./assets/imgs/serfeliz6.png","./assets/imgs/serfeliz7.png","./assets/imgs/serfeliz8.png","./assets/imgs/serfeliz9.png","./assets/imgs/serfeliz10.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 8, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
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
     this.test= { test:"Ser Feliz",
       resultado:"¡Excelente!",
        contenido:"¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Ser Feliz",
        resultado:"¡Muy Bueno!",
      contenido:"¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Ser Feliz",
        resultado:"¡Bueno!",
      contenido:"¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Ser Feliz",
        resultado:"¡Malo!",
      contenido:"Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Ser Feliz",
        resultado:"¡Muy Malo!",
      contenido:"¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
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
