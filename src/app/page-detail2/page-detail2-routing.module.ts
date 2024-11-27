import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDetail2Page } from './page-detail2.page';

const routes: Routes = [
  {
    path: '',
    component: PageDetail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDetail2PageRoutingModule {}
