import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoImcPage } from './resultado-imc';

@NgModule({
  declarations: [
    ResultadoImcPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadoImcPage),
  ],
})
export class ResultadoImcPageModule {}
