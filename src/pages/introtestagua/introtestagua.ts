import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { TestAguaPage } from '../test-agua/test-agua';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the IntrotestaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introtestagua',
  templateUrl: 'introtestagua.html',
})
export class IntrotestaguaPage {
  loader:any;
  fondo:string;

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform ,private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fportadatestagua.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fportadatestaguah.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
   this.presentLoading();
   platform.ready().then(()=>{
     this.loader.dismiss()});




    this.goToTestAgua1();
    
  }
goToTestAgua1(){
  window.setTimeout(()=>this.navCtrl.push(TestAguaPage),5000);

}
ionViewDidLoad(screenOrientation:ScreenOrientation) {
  if (this.screenOrientation.type =='portrait-primary') {
    this.fondo='./assets/imgs/fportadatestagua.jpg'
  }else if (this.screenOrientation.type=='landscape-primary') {
    this.fondo='./assets/imgs/fportadatestaguah.jpg'
  }
    console.log('ionViewDidLoad IntrotestaguaPage');
  }

  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }
}
