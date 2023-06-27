import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";
import { PessoaModel } from '../model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(pessoaModel: PessoaModel) : Observable<PessoaModel> {
    return this.httpClient.post<PessoaModel>(environment.URL_DESENVOLVIMENTO.concat("/pessoa"), pessoaModel);
  }

  public findAll() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(environment.URL_DESENVOLVIMENTO.concat("/pessoa"));
  }

}
