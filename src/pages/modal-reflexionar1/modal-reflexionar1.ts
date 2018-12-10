import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalReflexionar1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-reflexionar1',
  templateUrl: 'modal-reflexionar1.html',
})
export class ModalReflexionar1Page {
  reflexion:any[]=[];
  dia:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl :ViewController) {
    //Reflexiones
    this.reflexion = [{ref:"El agua es el componente principal del cuerpo humano: normalmente representa el 60% del peso corporal en hombres adultos, y es ligeramente inferior (50-55%) en mujeres debido a su proporción natural de más grasa corporal. "},
    {ref:"“Si necesitas algo para apagar la sed, el agua pura tomada poco antes o después de la comida es todo lo que la naturaleza requiere. Nunca té, café, cerveza, vino ni ninguna bebida alcohólica. El agua es el mejor líquido de que dispongamos para limpiar los tejidos”. The Review and Herald. 1884"},
    {ref:"“Muchos están viviendo en un estado de violación de las leyes de la salud, y son ignorantes de la relación que sus hábitos de comer, beber y trabajar tienen con su salud... Si los que sufren solamente recurrieran a los medios sencillos que han descuidado—el uso del agua y el régimen alimenticio debido—, la naturaleza tendría la clase de ayuda que necesita, y que debiera haber tenido hacía tiempo.” Consejos Sobre el Régimen Alimenticio. Pág. 359; 1864. "},
    {ref:"“Ingerida en cantidades suficientes, el agua suple las necesidades del organismo, y ayuda a la naturaleza a resistir a la enfermedad. Aplicada externamente, es uno de los medios más sencillo y eficaces para regularizar la circulación de la sangre”. El Ministerio de Curación. Pág. 181; 1905."},
    {ref:"El cerebro y los músculos son aproximadamente un 75% agua. La sangre y los riñones se componen en un 81% de agua. El 71% de tu hígado es agua y el 22% de tus huesos es agua."},
    {ref:"Cuando pierdes menos del 1% del agua de tu cuerpo, este comienza a necesitar agua de manera urgente porque se siente deshidratado."},
    {ref:"“La vida al aire libre es buena para el cuerpo y la mente. Es la medicina que Dios ha diseñado para la restauración de la salud. El aire puro, el agua limpia, la luz del sol y los hermosos parajes naturales son sus medios para devolverle la salud al enfermo, en armonía con la naturaleza”. Consejos Sobre el Régimen Alimenticio. Pág. 210; 1880."}
  ];

  
  }
//obtiene dia
  ionViewWillLoad(){
   this.dia=this.navParams.get('day');
   this.dia= parseInt(this.dia.dia);
   console.log("dia "+ this.dia.dia);
  }

//muere modal
  Cerrar(){
    this.viewCtrl.dismiss();
  }

}
