import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDataPageRoutingModule } from './page-data-routing.module';

import { PageDataPage } from './page-data.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDataPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PageDataPage]
})
export class PageDataPageModule {}
