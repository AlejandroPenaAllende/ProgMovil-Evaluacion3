import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDataPage } from './page-data.page';

const routes: Routes = [
  {
    path: '',
    component: PageDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDataPageRoutingModule {}
