import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluacionImcPage } from './evaluacion-imc';

@NgModule({
  declarations: [
    EvaluacionImcPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluacionImcPage),
  ],
})
export class EvaluacionImcPageModule {}
