import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalExpenseCreatePageRoutingModule } from './modal-expense-create-routing.module';
import { ModalExpenseCreatePage } from './modal-expense-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExpenseCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalExpenseCreatePage]
})
export class ModalExpenseCreatePageModule {}
