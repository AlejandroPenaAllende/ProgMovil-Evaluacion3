import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEventPage } from './tab-event.page';

const routes: Routes = [
  {
    path: '',
    component: TabEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEventPageRoutingModule {}
