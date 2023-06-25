import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavorecidoService } from 'src/app/service/favorecido.service';

@Component({
  selector: 'app-modal-favorecido-search',
  templateUrl: './modal-favorecido-search.page.html',
  styleUrls: ['./modal-favorecido-search.page.scss'],
})
export class ModalFavorecidoSearchPage implements OnInit {

  public nome: string = "";

  public favorecidoResponseList: any;

  public favorecidoObject: any;

  constructor(
    private favorecidoService: FavorecidoService,
    private modalController: ModalController
  ) { }

  ngOnInit() { 
    this.findAll();
  }

  public async findAll() {
    return this.favorecidoResponseList = this.favorecidoService.findAll();
  }

  public async recuperarFavorecido(event: any) {
    this.favorecidoResponseList = this.filterList(event.target.value);
  }

  public filterList(nome: any) {
    return this.favorecidoResponseList.filter( response => {
      return response.nome.toUpperCase().includes(nome.toUpperCase());
    });
  }

  public selecionarFavorecido(favorecido: any) {
    return this.modalController.dismiss(favorecido);
  }

}
