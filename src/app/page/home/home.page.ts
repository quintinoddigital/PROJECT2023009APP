import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalExpenseCreatePage } from 'src/app/component/modal-expense-create/modal-expense-create.page';
import { ModalIncomeCreatePage } from 'src/app/component/modal-income-create/modal-income-create.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public valorTotalReceita: any = 0;

  public valorTotalDespesa: any = 0;

  public valorSaldoTotal: any = this.valorTotalReceita - this.valorTotalDespesa;

  constructor(
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async openModalExpense() {
    this.presentModalExpense();
  }

  public async openModalIncome() {
    this.presentModalIncome();
  }

  public async openNotification() {
    this.presentToastDanger("Funcionalidade não implementada!");
  }

  public async openPerfil() {
    this.presentToastDanger("Funcionalidade não implementada!");
  }

  public async openWithdrawMoney() {
    this.presentToastDanger("Funcionalidade não implementada!");
  }

  public async openSendMoney() {
    this.presentToastDanger("Funcionalidade não implementada!");
  }

  private async presentToastDanger(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem.toString(),
      duration: 2000,
      animated: true,
      color: 'danger',
      position: "bottom"
    });
    return await toast.present();
  }

  private async presentModalExpense() {
    const modal = await this.modalController.create({
      component: ModalExpenseCreatePage,
      breakpoints: [0, 0.25, 0.70, 1],
      initialBreakpoint: 0.70,
    });
    modal.onDidDismiss().then((saldo) => {
      this.valorTotalDespesa -= Number(saldo.data);
    });
    return await modal.present();
  }

  private async presentModalIncome() {
    const modal = await this.modalController.create({
      component: ModalIncomeCreatePage,
      breakpoints: [0, 0.25, 0.60, 1],
      initialBreakpoint: 0.60
    });
    modal.onDidDismiss().then((saldo) => {
      this.valorTotalDespesa += Number(saldo.data);
    });
    return await modal.present();
  }

}
