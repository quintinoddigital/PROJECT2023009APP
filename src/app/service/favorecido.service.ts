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
      },
      {
        code: 2,
        nome: "Banco Caixa Econômica Federal",
      },
      {
        code: 3,
        nome: "Banco Itaú",
      },
      {
        code: 4,
        nome: "Banco Santander",
      },
      {
        code: 5,
        nome: "Banco Nubank",
      },
      {
        code: 6,
        nome: "Banco C6 Banck",
      },
      {
        code: 7,
        nome: "Clínica Odonto Minas (Brazlândia)",
      },
      {
        code: 8,
        nome: "Mirante Tecnologia da Informação",
      }
    ];
  }

}
