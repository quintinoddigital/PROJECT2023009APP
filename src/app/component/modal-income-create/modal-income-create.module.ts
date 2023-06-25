import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalIncomeCreatePageRoutingModule } from './modal-income-create-routing.module';
import { ModalIncomeCreatePage } from './modal-income-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalIncomeCreatePageRoutingModule
  ],
  declarations: [ModalIncomeCreatePage]
})
export class ModalIncomeCreatePageModule {}
