import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoService {

  public item$ = new BehaviorSubject<any>(null);

  constructor() { }
}
