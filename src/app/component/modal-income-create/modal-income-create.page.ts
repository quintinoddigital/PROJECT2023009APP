import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonInput, ModalController } from '@ionic/angular';
import { ModalFavorecidoSearchPage } from '../modal-favorecido-search/modal-favorecido-search.page';

@Component({
  selector: 'app-modal-income-create',
  templateUrl: './modal-income-create.page.html',
  styleUrls: ['./modal-income-create.page.scss'],
})
export class ModalIncomeCreatePage implements OnInit {

  @ViewChild("input")
  public input: IonInput;

  public formGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    value: new FormControl("", Validators.required),
    observation: new FormControl()
  });

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() { 
    this.input.setFocus(); 
  }

  public async createIncome() {
    if (this.formGroup.invalid) {
      this.presentAlertErrorFormulario("Preencha os Campos Obrigatórios!");
    } else {
      this.dismissModalFavorecidoSearch();
    }  
  }

  private async presentAlertErrorFormulario(mesage: string) {
    const alert = await this.alertController.create({
      header: "Informativo",
      message: mesage.toString(),
      buttons: ['Fechar'],
    });
    return await alert.present();
  }

  public async onPresentModalFavorecidoSearch() {
    const modal = await this.modalController.create({
      component: ModalFavorecidoSearchPage,
      breakpoints: [0, 0.25, 0.70, 0.90, 1],
      initialBreakpoint: 0.90,
    });
    modal.onDidDismiss().then((favorecido) => {
      this.formGroup.controls["name"].setValue(favorecido.data.nome);
    });
    await modal.present();
  }

  private async dismissModalFavorecidoSearch() {
    return this.modalController.dismiss(this.formGroup.controls["value"].value);
  }

}
