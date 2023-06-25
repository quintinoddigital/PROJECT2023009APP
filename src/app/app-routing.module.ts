import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'income',
    loadChildren: () => import('./page/income/income.module').then( m => m.IncomePageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./page/expense/expense.module').then( m => m.ExpensePageModule)
  },
  {
    path: 'modal-income-create',
    loadChildren: () => import('./component/modal-income-create/modal-income-create.module').then( m => m.ModalIncomeCreatePageModule)
  },
  {
    path: 'modal-expense-create',
    loadChildren: () => import('./component/modal-expense-create/modal-expense-create.module').then( m => m.ModalExpenseCreatePageModule)
  },
  {
    path: 'modal-favorecido-search',
    loadChildren: () => import('./component/modal-favorecido-search/modal-favorecido-search.module').then( m => m.ModalFavorecidoSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
