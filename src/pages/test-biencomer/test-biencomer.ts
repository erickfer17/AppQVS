import { RtestaguaPage } from './../rtestagua/rtestagua';
import { EvaluacionPage } from './../evaluacion/evaluacion';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TestDescansoadecuadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-biencomer',
  templateUrl: 'test-biencomer.html',
})
export class TestBiencomerPage {

  array:string []=["1- ¿Consumo nueces, semillas o almendras por lo menos una vez a la semana?", 
  "2-	¿Consumo al día más verduras y frutas que otros alimentos?",
  "3-	¿Sustituyo el consumo de alimentos refinados (pasta blanca, arroz blanco, pan blanco) por alimentos integrales (pan integral, pasta integral, arroz integral, etc.)?",
  "4-	¿Consumo productos de origen animal (carne, pollo, pescado, huevo, leche, queso y embutidos)?",
  "5- ¿Consumo leguminosas (frijoles, garbanzos, lentejas, habas, alubias, soya, entre otros) en mis alimentos diarios?",
  "6-	¿Utilizo margarina o mantequilla para preparar mis alimentos?",
  "7- ¿Reemplazo en mis alimentos la proteína de la carne por otras proteínas de origen vegetal?",
  "8-	¿Consumo diariamente tubérculos como papas, camote, yuca?",
  "9-	¿Consumo alimentos fritos diariamente?",
  "10- ¿Consumo más de 3 porciones de verduras al día? ",
  "11- ¿Cómo más de 5 porciones de frutas al día? "];

imagen:string []=["./assets/imgs/biencomer1.png","./assets/imgs/biencomer2.png","./assets/imgs/biencomer3.png","./assets/imgs/biencomer4.png","./assets/imgs/biencomer5.png","./assets/imgs/biencomer6.png","./assets/imgs/biencomer7.png","./assets/imgs/biencomer8.png","./assets/imgs/biencomer9.png","./assets/imgs/biencomer10.png","./assets/imgs/biencomer11.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 3, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
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
      if(this.i ==3 || this.i == 5 || this.i ==8){
        this.resultado=this.resultado+5;
      }else{this.resultado=this.resultado+1;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
    if(this.i ==11){
      this.goToTest();
    }
    }
    
    Rara(){
     
        if(this.i ==3 || this.i == 5 || this.i ==8){
          this.resultado=this.resultado+4;
        }else{this.resultado=this.resultado+2;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==11){
          this.goToTest();
        }
    }
  
    Aveces(){
     
        if(this.i ==3 || this.i == 5 || this.i ==8){
          this.resultado=this.resultado+3;
        }else{this.resultado=this.resultado+3;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==11){
          this.goToTest();
        }
    }
  
    Frecuentemente(){
     
        if(this.i ==3 || this.i == 5 || this.i ==8){
          this.resultado=this.resultado+2;
        }else{this.resultado=this.resultado+4;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        if(this.i ==11){
          this.goToTest();
        }
    }
  
    Si(){
     
        if(this.i ==3 || this.i == 5 || this.i ==8){
          this.resultado=this.resultado+1;
        }else{this.resultado=this.resultado+5;}
        this.i=this.i+1;
        this.pregunta=this.array[this.i];
        this.imagenagua=this.imagen[this.i];
        
        if(this.i ==11){
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
     this.test= { test:"Bien Comer",
       resultado:"¡Excelente!",
        contenido:"¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
        
        color:"#185417"};
    }else  if(this.resultadotest < 91 && this.resultadotest >=81){
      this.test={test:"Bien Comer",
        resultado:"¡Muy Bueno!",
      contenido:"¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
      
      color:"#458f31"};
    }else  if(this.resultadotest < 81 && this.resultadotest >=71){
      this.test={test:"Bien Comer",
        resultado:"¡Bueno!",
      contenido:"¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
      
      color:"#e1c206"};
    }else  if(this.resultadotest < 71 && this.resultadotest >=61){
      this.test={test:"Bien Comer",
        resultado:"¡Malo!",
      contenido:"Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
      
      color:"#d54b00"};
    }else if(this.resultadotest < 61 ){
      this.test={test:"Bien Comer",
        resultado:"¡Muy Malo!",
      contenido:"¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
      
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


