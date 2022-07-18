import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'game-detail',
    loadChildren: () => import('./game-detail/game-detail.module').then( m => m.GameDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
