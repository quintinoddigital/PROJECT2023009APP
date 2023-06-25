import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalExpenseCreatePage } from './modal-expense-create.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExpenseCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class ModalExpenseCreatePageRoutingModule {}
