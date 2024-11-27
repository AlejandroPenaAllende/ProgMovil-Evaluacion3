import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizadoGuard } from '../guards/auth.guard';

import { TabMainPage } from './tab-main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabMainPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then( m => m.TabHomePageModule),
        canActivate: [AutorizadoGuard]
      },
      {
        path: 'tab-event',
        loadChildren: () => import('../tab-event/tab-event.module').then( m => m.TabEventPageModule),
        canActivate: [AutorizadoGuard]
      },
      {
        path:'',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMainPageRoutingModule {}
