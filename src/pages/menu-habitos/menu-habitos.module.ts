import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuHabitosPage } from './menu-habitos';

@NgModule({
  declarations: [
    MenuHabitosPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuHabitosPage),
  ],
})
export class MenuHabitosPageModule {}
