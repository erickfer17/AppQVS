import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestBiencomerPage } from './test-biencomer';

@NgModule({
  declarations: [
    TestBiencomerPage,
  ],
  imports: [
    IonicPageModule.forChild(TestBiencomerPage),
  ],
})
export class TestBiencomerPageModule {}
