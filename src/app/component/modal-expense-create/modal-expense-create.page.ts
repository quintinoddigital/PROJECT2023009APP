import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ModalFavorecidoSearchPage } from '../modal-favorecido-search/modal-favorecido-search.page';

@Component({
  selector: 'app-modal-expense-create',
  templateUrl: './modal-expense-create.page.html',
  styleUrls: ['./modal-expense-create.page.scss'],
})
export class ModalExpenseCreatePage implements OnInit {

  public saldo: any = 0;

  public isChecked: boolean = false;

  public expenseModel: any;

  public favorecidoObject: any;

  public favorecidoSelecionadoModalFilho: any;

  public favorevidoModelList: any[] = [];

  public form = new FormGroup({
    nomeFavorecido: new FormControl("", Validators.required),
    valor: new FormControl("", Validators.required),
    observacao: new FormControl()
  });

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async recuperarFavorecido() {
    console.log(this.favorecidoObject = window.localStorage.getItem("pesquisaFavorecidoObject"));    
  }

  public async createExpense() { 
    if (this.form.invalid) {
      this.presentAlertErrorFormulario("Preencha os Campos Obrigatórios!");
    } else {
      this.dismissModalFavorecidoSearch();
    }
  }

  public async onPresentModalFavorecidoSearch() {
    const modal = await this.modalController.create({
      component: ModalFavorecidoSearchPage,
      breakpoints: [0, 0.25, 0.70, 0.90, 1],
      initialBreakpoint: 0.90,
    });
    modal.onDidDismiss().then((favorecido) => {
      this.form.controls["nomeFavorecido"].setValue(favorecido.data.nome);
    });
    await modal.present();
  }

  private async presentAlert() {
    const alert = await this.alertController.create({
      header: "Atenção",
      message: "Expense created successfully!",
      buttons: ['Fechar'],
    });
    return await alert.present();
  }

  private async presentAlertErrorFormulario(mesage: string) {
    const alert = await this.alertController.create({
      header: "Informativo",
      message: mesage.toString(),
      buttons: ['Fechar'],
    });
    return await alert.present();
  }

  private async dismissModalFavorecidoSearch() {
    return this.modalController.dismiss(this.form.controls["valor"].value);
  }

}
