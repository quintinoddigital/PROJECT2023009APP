import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFavorecidoSearchPageRoutingModule } from './modal-favorecido-search-routing.module';

import { ModalFavorecidoSearchPage } from './modal-favorecido-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFavorecidoSearchPageRoutingModule
  ],
  declarations: [ModalFavorecidoSearchPage]
})
export class ModalFavorecidoSearchPageModule {}
