import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoSaludPage } from './resultado-salud';

@NgModule({
  declarations: [
    ResultadoSaludPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadoSaludPage),
  ],
})
export class ResultadoSaludPageModule {}
