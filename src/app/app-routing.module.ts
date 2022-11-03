import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'abouteme',
    loadChildren: () => import('./abouteme/abouteme.module').then( m => m.AboutemePageModule)
  },
  {
    path: 'mycontact',
    loadChildren: () => import('./mycontact/mycontact.module').then( m => m.MycontactPageModule)
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
  },  {
    path: 'cen',
    loadChildren: () => import('./cen/cen.module').then( m => m.CenPageModule)
  },
  {
<<<<<<< HEAD
    path: 'plian',
    loadChildren: () => import('./plian/plian.module').then( m => m.PlianPageModule)
=======
    path: 'abouteme',
    loadChildren: () => import('./abouteme/abouteme.module').then( m => m.AboutemePageModule)
  },
  {
    path: 'mycontact',
    loadChildren: () => import('./mycontact/mycontact.module').then( m => m.MycontactPageModule)
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
    path: 'myorder',
    loadChildren: () => import('./myorder/myorder.module').then( m => m.MyorderPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'h',
    loadChildren: () => import('./h/h.module').then( m => m.HPageModule)
>>>>>>> 64d7f90d12105036c6dd1705fd2af86d5bde6513
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
