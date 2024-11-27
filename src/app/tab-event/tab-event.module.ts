import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEventPageRoutingModule } from './tab-event-routing.module';

import { TabEventPage } from './tab-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEventPageRoutingModule
  ],
  declarations: [TabEventPage]
})
export class TabEventPageModule {}
