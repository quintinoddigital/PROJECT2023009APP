import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIncomeCreatePageRoutingModule } from './modal-income-create-routing.module';

import { ModalIncomeCreatePage } from './modal-income-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalIncomeCreatePageRoutingModule
  ],
  declarations: [ModalIncomeCreatePage]
})
export class ModalIncomeCreatePageModule {}
