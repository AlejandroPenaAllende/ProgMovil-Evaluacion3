import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDetail2PageRoutingModule } from './page-detail2-routing.module';

import { PageDetail2Page } from './page-detail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDetail2PageRoutingModule
  ],
  declarations: [PageDetail2Page]
})
export class PageDetail2PageModule {}
