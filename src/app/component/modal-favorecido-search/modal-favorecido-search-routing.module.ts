import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFavorecidoSearchPage } from './modal-favorecido-search.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFavorecidoSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFavorecidoSearchPageRoutingModule {}
