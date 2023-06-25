import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorecidoService {

  public favorevidoModelOtionList: any[] = [];

  constructor() { }

  public findAll() {
    return this.favorevidoModelOtionList = [
      {
        code: 1,
        nome: "Banco do Brasil",
        isChecked: false
      },
      {
        code: 2,
        nome: "Banco Caixa Econômica Federal",
        isChecked: false
      },
      {
        code: 3,
        nome: "Banco Itaú",
        isChecked: false
      },
      {
        code: 4,
        nome: "Banco Santander",
        isChecked: false
      },
      {
        code: 5,
        nome: "Banco Nubank",
        isChecked: false
      },
      {
        code: 6,
        nome: "Banco C6 Banck",
        isChecked: false
      },
      {
        code: 7,
        nome: "Clínica Odonto Minas (Brazlândia)",
        isChecked: false
      }
    ];
  }

}
