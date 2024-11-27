import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageQrPage } from './page-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PageQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageQrPageRoutingModule {}
