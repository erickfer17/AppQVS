import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BienvenidaPage } from '../bienvenida/bienvenida';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',


})


export class RegistroPage {
  registro = {};
  private datos:FormGroup;
  data:any;
  mensaje:any;
  loading:any;
  constructor(public navCtrl: NavController, public restprovider:RestProvider, private formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {


      
      this.datos = this.formBuilder.group({
        nombre:['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        edad: ['', Validators.required],
        sexo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        ciudad: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        pais: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        estado: ['',[Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        municipio: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        religion: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  signup() {
    this.restprovider.reg(this.datos.value).then((result)=>{
      this.data=result;
      console.log(this.data);},
      (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      
    });

    /*this.showLoader();
    this.restprovider.registro(this.datos.value).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.mensaje = this.data.exito;
      console.log(this.data.nombre);
      console.log(this.mensaje);
      window.localStorage.setItem('correo', this.data.correo);
      window.localStorage.setItem('password', this.data.password);
      window.localStorage.setItem('token',this.data.token);
      window.localStorage.setItem('nombre',this.data.nombre);
      window.localStorage.setItem('sexo', this.data.sexo);
      if(this.mensaje=="Registro exitoso"){
        this.goToBienvenida();
        this.presentToast(this.mensaje);

      }else if(this.mensaje=="POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS"){
        this.presentToast(this.mensaje);
      } else if(this.mensaje=="ESTE CORREO YA ESTA REGISTRADO"){
        this.presentToast(this.mensaje);
      }
      /*if(typeof window.localStorage.getItem('token')!=undefined){
      this.goToSaludo();
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });*/
  }

  
  goToBienvenida(){
    this.navCtrl.push(BienvenidaPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
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
