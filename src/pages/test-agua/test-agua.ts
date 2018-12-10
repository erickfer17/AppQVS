import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, Platform  } from 'ionic-angular';
import { TestPage } from '../test/test';
import { RtestaguaPage } from '../rtestagua/rtestagua';
import { RestProvider } from '../../providers/rest/rest';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the TestAguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
   
  selector: 'page-test-agua',
  templateUrl: 'test-agua.html',
})


export class TestAguaPage {
  array:string []=["1-	¿Reemplazo el agua natural por otros líquidos, ya sea refrescos o jugos, cuando tengo sed?", 
  "2-	¿Bebo dos vasos de agua natural al levantarme, antes de desayunar?",
  "3-	¿Bebo dos vasos de agua natural 30 minutos antes de cada comida?",
  "4-	¿Bebo dos vasos de agua natural 30 minutos antes de cada cena?",
  "5-	¿Bebo agua cuando estoy realizando ejercicio físico?",
  "6-	¿Bebo agua natural aun sin tener sed?",
  "7- ¿Bebo un vaso de agua natural una hora antes de dormir?",
  "8-	¿Beber agua natural forma parte de mi rutina diaria?",
  "9-	¿Consumo al menos ocho vasos de agua natural al día?"


];

imagen:string []=["./assets/imgs/agua1y6.png","./assets/imgs/agua2y7.png","./assets/imgs/agua3y4.png","./assets/imgs/agua3y4.png","./assets/imgs/agua5.png","./assets/imgs/agua1y6.png","./assets/imgs/agua2y7.png","./assets/imgs/agua8.png","./assets/imgs/agua9.png"];
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
  datosTest= {"id" : window.localStorage.getItem('id'), "id_habito" : 1, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
  loader:any;
  fondo:string;
  constructor(public navCtrl: NavController, platform:Platform,  public restprovider:RestProvider, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation:ScreenOrientation) {

      this.screenOrientation.onChange().subscribe(
        () => {
            
            if (this.screenOrientation.type =='portrait-primary') {
              this.fondo='./assets/imgs/ftestagua.jpg'
            }else if (this.screenOrientation.type=='landscape-primary') {
              this.fondo='./assets/imgs/ftestaguah.jpg'
            }
            console.log(this.screenOrientation.type);
        }
     );
    /*  this.presentLoading();
/*platform.ready().then(()=>{
          this.loader.dismiss();
      });*/
     
  }

  No(){
  console.log(this.fechaActual);
    if(this.i ==0){
      this.resultado=this.resultado+5;
    }else{this.resultado=this.resultado+1;}
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==9){
    this.goToTest();
  }
  }
  
  Rara(){
   
      if(this.i ==0){
        this.resultado=this.resultado+4;
      }else{this.resultado=this.resultado+2;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }

  Aveces(){
   
      if(this.i ==0){
        this.resultado=this.resultado+3;
      }else{this.resultado=this.resultado+3;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }

  Frecuentemente(){
   
      if(this.i ==0){
        this.resultado=this.resultado+2;
      }else{this.resultado=this.resultado+4;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }

  Si(){
   
      if(this.i ==0){
        this.resultado=this.resultado+1;
      }else{this.resultado=this.resultado+5;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      
      if(this.i ==9){
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
      
      this.navCtrl.setRoot(EvaluacionPage);
      this.navCtrl.push(RtestaguaPage);
   
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
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/ftestagua.jpg'
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/ftestaguah.jpg'
    }
    console.log(this.screenOrientation.type);
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

