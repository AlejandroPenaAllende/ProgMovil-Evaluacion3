import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideHttpClient } from '@angular/common/http';
import { ApiDataService } from './service/api-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxImageCompressService} from 'ngx-image-compress';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },provideHttpClient(), ApiDataService,NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
