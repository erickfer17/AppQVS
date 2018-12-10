import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalTips1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-tips1',
  templateUrl: 'modal-tips1.html',
})
export class ModalTips1Page {
  tips:any[]=[];
  tips2:any[]=[];
  dia:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    //Reflexiones
    this.tips = [{tip:"Deja un vaso con agua natural listo desde la noche para que no se te olvide Beber Agua Natural al momento de levantarte."},
    {tip:"Dedica una botella especial para tomar agua. Llévala a todas partes y bebe agua natural, aunque no tengas sed."},
    {tip:"Al momento de iniciar a cocinar los alimentos puedes Beber Agua Natural."},
    {tip:"Si no estás acostumbrado a tomar agua, puedes agregar tres rebanadas de limón, fresa, naranja, lima o frutos rojos, por litro, sin añadirle azúcar."},
    {tip:"Antes de cepillarte los dientes bebe un vaso con agua natural."},
    {tip:"Lleva tu botella con agua al lugar donde te ejercites y toma el equivalente a medio vaso o un vaso (100 ml a 250 ml), y repite cada 20 a 30 minutos para mantenerte hidratado/a."},
    {tip:"Lleva tu botella de agua natural contigo al trabajo o escuela y bebe de ella constantemente."}
  ];

  this.tips2 = [{tip2:"Puedes tomarla tibia añadiendo el jugo de un limón."},
    {tip2:"Rellena tu botella de agua natural cuantas veces sea necesario durante el día para mantenerte hidratado/a."},
    {tip2:"Si comes fuera de tu casa puedes Beber Agua Natural antes de ordenar los alimentos."},
    {tip2:"Pon notas en un lugar visible como tu espejo, refrigerador, puerta, etc. que diga: debo Beber Agua Natural hoy."},
    {tip2:"Programa un recordatorio en tu celular para motivarte a Beber Agua Natural."},
    {tip2:""},
    {tip2:"En lugar de ordenar refresco o jugo envasado pide agua natural."}
  ];
  }
  //optener dia
  ionViewWillLoad(){
    this.dia=this.navParams.get('day');
    this.dia= parseInt(this.dia.dia);
    console.log("dia "+ this.dia.dia);
   }
//cerrar modal
  Cerrar(){
    this.viewCtrl.dismiss();
  }

  
}
