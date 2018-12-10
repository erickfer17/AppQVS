import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalImcPage } from './modal-imc';

@NgModule({
  declarations: [
    ModalImcPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalImcPage),
  ],
})
export class ModalImcPageModule {}
