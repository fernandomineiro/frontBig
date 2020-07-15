import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sala1',
    loadChildren: () => import('./sala1/sala1.module').then( m => m.Sala1PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'central',
    loadChildren: () => import('./central/central.module').then( m => m.CentralPageModule)
  },
  {
    path: 'senhaperdida',
    loadChildren: () => import('./senhaperdida/senhaperdida.module').then( m => m.SenhaperdidaPageModule)
  },
  {
    path: 'intruso',
    loadChildren: () => import('./intruso/intruso.module').then( m => m.IntrusoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
