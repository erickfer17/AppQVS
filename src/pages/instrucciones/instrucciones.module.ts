import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstruccionesPage } from './instrucciones';

@NgModule({
  declarations: [
    InstruccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstruccionesPage),
  ],
})
export class InstruccionesPageModule {}
