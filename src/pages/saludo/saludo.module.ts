import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaludoPage } from '../saludo/saludo';

@NgModule({
  declarations: [
    SaludoPage,
  ],
  imports: [
    IonicPageModule.forChild(SaludoPage),
  ],
})
export class SaludoPageModule {}
