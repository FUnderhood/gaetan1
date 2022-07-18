import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GamesPage,
    children:[
      {
        path: 'discover',
        children:[
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path: ':gameId',
            loadChildren: () => import('./discover/game-detail/game-detail.module').then( m => m.GameDetailPageModule)
          }
        ]
      },
      {
        path: 'create-game',
        children: [
          {
            path: '',
            loadChildren: () => import('./create-game/create-game.module').then( m => m.CreateGamePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo:'/games/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/games/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
