import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPrincipalPage } from './menu-principal';

@NgModule({
  declarations: [
    MenuPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPrincipalPage),
  ],
})
export class MenuPrincipalPageModule {}
