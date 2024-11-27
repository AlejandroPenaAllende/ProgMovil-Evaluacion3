import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMainPageRoutingModule } from './tab-main-routing.module';

import { TabMainPage } from './tab-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMainPageRoutingModule
  ],
  declarations: [TabMainPage]
})
export class TabMainPageModule {}
