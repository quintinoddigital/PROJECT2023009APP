import { Component, OnInit } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
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

  public isConectado: boolean = false;

  public connectionStatus: ConnectionStatus;

  constructor(
    private toastController: ToastController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.verificarConexao();
  }

  public verificarConexao() {
    if (Network) {
      Network.getStatus().then( (response) => {
        this.connectionStatus = response;
      });
    }
    Network.addListener("networkStatusChange", status => {
      this.connectionStatus = status;
      this.isConectado = this.connectionStatus.connected;
    });
  }

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
      if (saldo.role !== 'backdrop') {
        this.valorTotalDespesa -= Number(saldo.data);
      } else {
        this.valorTotalDespesa += Number(0);
      }
    });
    return await modal.present();
  }

  private async presentModalIncome() {
    const modal = await this.modalController.create({
      component: ModalIncomeCreatePage,
      breakpoints: [0, 0.25, 0.70, 1],
      initialBreakpoint: 0.70,
      cssClass: "modal-income-create",
    });
    modal.onDidDismiss().then((saldo) => {
      if (saldo.role !== 'backdrop') {
        this.valorTotalDespesa += Number(saldo.data);
      } else {
        this.valorTotalDespesa += Number(0);
      }
    });
    return await modal.present();
  }

}
