import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienvenidaPage } from './bienvenida';

@NgModule({
  declarations: [
    BienvenidaPage,
  ],
  imports: [
    IonicPageModule.forChild(BienvenidaPage),
  ],
})
export class BienvenidaPageModule {}
