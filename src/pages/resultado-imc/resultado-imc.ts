import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { PerimetroAbdominalPage } from '../perimetro-abdominal/perimetro-abdominal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the ResultadoImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-imc',
  templateUrl: 'resultado-imc.html',


})
export class ResultadoImcPage {
  fondoimc: string;
  nombre: string;
  imagenpeso: string;
  IMC: any;
  condicion: string;
  recomendacion: string;
  lista1: any[] = [];
  loader: any;

  constructor(platform: Platform, public loadingCtrl: LoadingController, public navCtrl: NavController, public screenOrientation:ScreenOrientation, public navParams: NavParams) {
    this.screenOrientation.lock('portrait');
    this.presentLoading();
    platform.ready().then(() => {

      //Seleccionar fondos\
      if (window.localStorage.getItem('sexo') == "masculino") {
        this.fondoimc = "./assets/imgs/fimch.jpg";
      } else if (window.localStorage.getItem('sexo') == "femenino") {
        this.fondoimc = "./assets/imgs/fimcm.jpg";
      }
      //asignnar datos a la variables
      this.nombre = window.localStorage.getItem('nombre');
      this.IMC = Number(window.localStorage.getItem('imc')).toFixed(1);
      this.condicion = window.localStorage.getItem('condicion');

      //seleccionar listas y recomendacion 
      if (window.localStorage.getItem('condicion') == 'BAJO PESO') {
        this.lista1 = [{ titulo: "Trastornos del sistema inmunológico (Las defensas de tu cuerpo)" },
        { titulo: "Pérdida de masa ósea" },
        { titulo: "Anemia por deficiencia de hierro" },
        { titulo: "Problemas cardíacos" },
        { titulo: "Problemas de fertilidad" },
        { titulo: "Mayor riesgo de sufrir osteoporosis" },
        { titulo: "Ausencia de período menstrual en mujeres (Amenorrea)" },
        { titulo: "Mayor riesgo de sufrir infecciones" }];
        this.recomendacion = 'Tienes un BAJO PESO ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      }


      if (window.localStorage.getItem('condicion') == 'PESO NORMAL') {
        this.lista1 = [];
        this.recomendacion = 'Tienes un RIESGO BAJO  y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantener un peso normal. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
      }


      if (window.localStorage.getItem('condicion') == 'SOBREPESO') {
        this.lista1 = [{ titulo: 'Diabetes' },
        { titulo: 'Presión arterial alta (hipertensión)' },
        { titulo: 'Insuficiencia cardíaca' },
        { titulo: 'Algunos tipos de cáncer' },
        { titulo: 'Estrés' },
        { titulo: 'Ansiedad' },
        { titulo: 'Depresión' },
        { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
        { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
        { titulo: 'Niveles altos de LDL (Colesterol malo)' },
        { titulo: 'Síndrome metabólico' },
        { titulo: 'Infartos al corazón' },
        { titulo: 'Gastritis' },
        { titulo: 'Reflujo gastroesofágico' }
        ];
        this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      }

      if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA') {
        this.lista1 = [{ titulo: 'Diabetes' },
        { titulo: 'Presión arterial alta (hipertensión)' },
        { titulo: 'Insuficiencia cardíaca' },
        { titulo: 'Algunos tipos de cáncer' },
        { titulo: 'Estrés' },
        { titulo: 'Ansiedad' },
        { titulo: 'Depresión' },
        { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
        { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
        { titulo: 'Niveles altos de LDL (Colesterol malo)' },
        { titulo: 'Síndrome metabólico' },
        { titulo: 'Infartos al corazón' },
        { titulo: 'Gastritis' },
        { titulo: 'Reflujo gastroesofágico' }
        ];
        this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      }

      if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA') {
        this.lista1 = [{ titulo: 'Diabetes' },
        { titulo: 'Presión arterial alta (hipertensión)' },
        { titulo: 'Insuficiencia cardíaca' },
        { titulo: 'Algunos tipos de cáncer' },
        { titulo: 'Estrés' },
        { titulo: 'Ansiedad' },
        { titulo: 'Depresión' },
        { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
        { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
        { titulo: 'Niveles altos de LDL (Colesterol malo)' },
        { titulo: 'Síndrome metabólico' },
        { titulo: 'Infartos al corazón' },
        { titulo: 'Gastritis' },
        { titulo: 'Reflujo gastroesofágico' }
        ];
        this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO SEVERO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      }

      if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA') {
        this.lista1 = [{ titulo: 'Diabetes' },
        { titulo: 'Presión arterial alta (hipertensión)' },
        { titulo: 'Insuficiencia cardíaca' },
        { titulo: 'Algunos tipos de cáncer' },
        { titulo: 'Estrés' },
        { titulo: 'Ansiedad' },
        { titulo: 'Depresión' },
        { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
        { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
        { titulo: 'Niveles altos de LDL (Colesterol malo)' },
        { titulo: 'Síndrome metabólico' },
        { titulo: 'Infartos al corazón' },
        { titulo: 'Gastritis' },
        { titulo: 'Reflujo gastroesofágico' }
        ];
        this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO MUY SEVERO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      }
      //Seleccionar imagen

      if (window.localStorage.getItem('condicion') == 'BAJO PESO' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/bajopesom.png';
      }
      if (window.localStorage.getItem('condicion') == 'BAJO PESO' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/bajopesoh.png';
      }
      if (window.localStorage.getItem('condicion') == 'PESO NORMAL' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/pesonormalm.png';
      }
      if (window.localStorage.getItem('condicion') == 'PESO NORMAL' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/pesonormalh.png';
      }
      if (window.localStorage.getItem('condicion') == 'SOBREPESO' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/sobrepesom.png';
      }
      if (window.localStorage.getItem('condicion') == 'SOBREPESO' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/sobrepesoh.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/obesom.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/obesoh.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/obesoseverom.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/obesoseveroh.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA' && window.localStorage.getItem('sexo') == 'femenino') {
        this.imagenpeso = './assets/imgs/obesomorbidom.png';
      }
      if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA' && window.localStorage.getItem('sexo') == 'masculino') {
        this.imagenpeso = './assets/imgs/obesomorbidoh.png';
      }
        sessionStorage.setItem('listo','1');
    });
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoImcPage');
  }



  goToPerimetroAbdominal() {
    this.navCtrl.push(PerimetroAbdominalPage);
  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });

    this.loader.present();

  }
}
