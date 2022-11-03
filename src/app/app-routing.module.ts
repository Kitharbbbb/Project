import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
=======
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
>>>>>>> f58853e31fde9e47e02dcc6d46b8a5927d9611ea
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
<<<<<<< HEAD
  },
  {
    path: 'plian',
    loadChildren: () => import('./plian/plian.module').then( m => m.PlianPageModule)
  },
  {
    path: 'myorder',
    loadChildren: () => import('./myorder/myorder.module').then( m => m.MyorderPageModule)
=======
>>>>>>> f58853e31fde9e47e02dcc6d46b8a5927d9611ea
  },
  {
    path: 'plian',
    loadChildren: () => import('./plian/plian.module').then( m => m.PlianPageModule)
  },
  {
<<<<<<< HEAD
    path: 'h',
    loadChildren: () => import('./h/h.module').then( m => m.HPageModule)
=======
    path: 'cenyes',
    loadChildren: () => import('./cenyes/cenyes.module').then( m => m.CenyesPageModule)
>>>>>>> f58853e31fde9e47e02dcc6d46b8a5927d9611ea
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
