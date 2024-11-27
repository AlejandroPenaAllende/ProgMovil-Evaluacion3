import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDataPageRoutingModule } from './page-data-routing.module';

import { PageDataPage } from './page-data.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDataPageRoutingModule
  ],
  declarations: [PageDataPage]
})
export class PageDataPageModule {}
