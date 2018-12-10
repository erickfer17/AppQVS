import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalTips1Page } from './../modal-tips1/modal-tips1';
import { ModalReflexionar1Page } from './../modal-reflexionar1/modal-reflexionar1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions, Modal, ModalController, ToastController } from 'ionic-angular';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the Actividadhbt1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividadhbt1',
  templateUrl: 'actividadhbt1.html',
})
export class Actividadhbt1Page {
  //variables
  auxdia:any;
  dia;
  actividad:any[]=[];
  links:any[]=[];
  public state:boolean;
  userConsulta = {"id": "","id_habito":"1", "registro":"consultaActividad"}; //datos de envio a la api
  public state2:boolean;
  fondo:string;
  constructor(private navCtrl: NavController,private Modal:ModalController,public params:NavParams, public toastCtrl:ToastController, public iap: InAppBrowser, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/factividadhbt1.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/factividadhbt1h.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );

    
    //asignar variables
    this.userConsulta.id=window.localStorage.getItem("id");//optener id de usuario
    this.auxdia = parseInt (params.get('auxdia'));
    this.dia=this.auxdia;
    
    //validar estado del boton
    if(this.dia == parseInt(window.localStorage.getItem("actividad"))){
      this.state=false;
    }else{
      this.state=true;
    }
    
    //ACTIVIDADES
    this.actividad = [{act:"Bebe dos vasos de agua natural de 250 ml c/u al levantarte y hasta 30 minutos antes de desayunar."},
    {act:"Bebe un vaso de agua natural de 250 ml dos horas después del desayuno y un vaso de agua natural de 250 ml dos horas después de la comida del mediodía."},
    {act:"Bebe dos vasos de agua natural de 250 ml c/u media hora antes de la comida del mediodía."},
    {act:"Bebe dos vasos de agua natural de 250 ml c/u 30 minutos antes de la cena."},
    {act:"Bebe un vaso de 250ml de agua natural dos horas antes de dormir."},
    {act:"Bebe Agua Natural mientras realizas ejercicio físico."},
    {act:"No reemplaces el agua natural por refresco o jugos comerciales envasados."}
  ];

  //links saber mas
  this.links = [{link:"http://quierovivirsano.org/2016/02/25/beber-agua-en-ayunas"},
  {link:"http://quierovivirsano.org/2016/02/25/no-esperes-bebe-agua-ya"},
  {link:"http://quierovivirsano.org/2016/02/25/agua-antes-de-las-comidas"},
  {link:"http://quierovivirsano.org/2016/02/25/beber-agua-ayuda-a-perder-peso"},
  {link:"http://quierovivirsano.org/2016/02/25/un-vaso-de-agua-antes-de-dormir"},
  {link:"http://quierovivirsano.org/2016/02/25/la-hidratacion-durante-el-ejercicio"},
  {link:"http://quierovivirsano.org/2016/04/07/agua-pura-o-bebidas-azucarada"}
];


  }
ionViewWillEnter(){
 
}

ionViewDidLoad(screenOrientation:ScreenOrientation) {
  if (this.screenOrientation.type =='portrait-primary') {
    this.fondo='./assets/imgs/factividadhbt1.jpg'
  }else if (this.screenOrientation.type=='landscape-primary') {
    this.fondo='./assets/imgs/factividadhbt1h.jpg'
  }
    
    
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
  
  openModal(){

  let compromisoOpciones : ModalOptions = {
   //mostrar fondo model
    showBackdrop:true
  };
   let compromiso:Modal = this.Modal.create(Compromisohbt1Page);//PRESENTAR MODAL
   compromiso.present();
   
  }


  //Modal Tips
  ModalTips(){
    let datos ={ dia:this.dia };
    let TipsOpciones : ModalOptions = {
      //mostrar fondo model
       showBackdrop:true
     };
      let Tip:Modal = this.Modal.create(ModalTips1Page, { day: datos });//PRESENTAR MODAL y envio datos de actividad
      Tip.present();
  }

//Modal para rlexionar
  ModalReflexionar(){
    let datos ={ dia:this.dia };
    let reflexionarOpciones : ModalOptions = {
      //mostrar fondo model
       showBackdrop:true
     };
      let reflexionar:Modal = this.Modal.create(ModalReflexionar1Page, { day: datos });//PRESENTAR MODAL y envio datos de actividad
      reflexionar.present();
  }
//abrir reflexionar
goToReflexionar(){
  this.ModalReflexionar();
}

//abrir tips
goToTips(){
  this.ModalTips();
}

//abrir compromiso
  goToAdelante(){
    this.openModal();
    
  }

  //abrir saber mas
  goToSaberMas(){
    this.iap.create(this.links[this.dia].link,"_blank");
  }
 
 
}
