import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-login',
    pathMatch: 'full'
  },
  {
    path: 'page-login',
    loadChildren: () => import('./page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab-main/tab-main.module').then( m => m.TabMainPageModule)
  },
  {
    path: 'page-register',
    loadChildren: () => import('./page-register/page-register.module').then( m => m.PageRegisterPageModule)
  },
  {
    path: 'page-detail',
    loadChildren: () => import('./page-detail/page-detail.module').then( m => m.PageDetailPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'page-detail2',
    loadChildren: () => import('./page-detail2/page-detail2.module').then( m => m.PageDetail2PageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'page-profile',
    loadChildren: () => import('./page-profile/page-profile.module').then( m => m.PageProfilePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'page-qr',
    loadChildren: () => import('./page-qr/page-qr.module').then( m => m.PageQrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'page-data',
    loadChildren: () => import('./page-data/page-data.module').then( m => m.PageDataPageModule),
    canActivate: [AutorizadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }