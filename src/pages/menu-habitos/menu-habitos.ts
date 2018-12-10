
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Habito1Page } from '../habito1/habito1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the MenuHabitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-habitos',
  templateUrl: 'menu-habitos.html',
})
export class MenuHabitosPage {
  
  habito1: any[] = [];
  habito2: any[] = [];
  habito3: any[] = [];
  habito4: any[] = [];
  habito5: any[] = [];
  habito6: any[] = [];
  habito7: any[] = [];
  habito8: any[] = [];
  sex:string;
  contadordias:any;
  fondo:string;
  loader:any;
  constructor(public navCtrl: NavController, platform:Platform,public loadingCtrl:LoadingController, private navParams : NavParams, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/fmenuhabitos.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fmenuhabitosh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
    


    console.log(window.localStorage.getItem("actividad"));
    
    
    //seleccionar sexo de las figuras
    if(window.localStorage.getItem('sexo')=='femenino'){
      this.sex = 'mujer';
    }else if(window.localStorage.getItem('sexo')=='masculino'){
      this.sex ='hombre';
    }
    //rellenar figuras deacuerdo a los dias realizados
    if(window.localStorage.getItem("actividad") != "null"){
      
      let actividad:any = window.localStorage.getItem("actividad");
      let auxactividad:any = 7-actividad;
      for(let i = 0; i < auxactividad; i++){
        this.habito1[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
      }
      for(let i =auxactividad; i<7; i++){
        this.habito1[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
      }
     
    }else{
      
      for(let i = 0; i < 7; i++){
        this.habito1[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
      }
    }

    

    for(let i = 0; i < 7; i++){
      this.habito2[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
    

    for(let i = 0; i < 7; i++){
      this.habito3[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }

    for(let i = 0; i < 7; i++){
      this.habito4[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }

    for(let i = 0; i < 7; i++){
      this.habito5[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }

    for(let i = 0; i < 7; i++){
      this.habito6[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }

    for(let i = 0; i < 7; i++){
      this.habito7[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }

    for(let i = 0; i < 7; i++){
      this.habito8[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fmenuhabitos.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fmenuhabitosh.jpg'
    }}

  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'
  
    });
    this.loader.present();
  }


  
 


goToHabito1(){
  this.navCtrl.push(Habito1Page);
}





}
