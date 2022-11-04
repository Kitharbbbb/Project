import { CenyesPage } from './cenyes/cenyes.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cen',
    loadChildren: () => import('./cen/cen.module').then( m => m.CenPageModule)
  },
  {
    path: 'plian',
    loadChildren: () => import('./plian/plian.module').then( m => m.PlianPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'cenyes',
    loadChildren: () => import('./cenyes/cenyes.module').then( m => m.CenyesPageModule)
  },
  {
    path: 'h',
    loadChildren: () => import('./h/h.module').then( m => m.HPageModule)
  },  {
    path: 'lomax',
    loadChildren: () => import('./lomax/lomax.module').then( m => m.LomaxPageModule)
  },
  {
    path: 'yang',
    loadChildren: () => import('./yang/yang.module').then( m => m.YangPageModule)
  },
  {
    path: 'toaisia',
    loadChildren: () => import('./toaisia/toaisia.module').then( m => m.ToaisiaPageModule)
  },
  {
    path: 'kreangyon',
    loadChildren: () => import('./kreangyon/kreangyon.module').then( m => m.KreangyonPageModule)
  },
  {
    path: 'puanmalai',
    loadChildren: () => import('./puanmalai/puanmalai.module').then( m => m.PuanmalaiPageModule)
  },
  {
    path: 'confirmbuy',
    loadChildren: () => import('./confirmbuy/confirmbuy.module').then( m => m.ConfirmbuyPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
