import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { Contrato } from '../models/contrato.model';


@Injectable({
  providedIn: 'root'
})
export class ContratosService extends BaseCrudService<Contrato>{

  selectedContractSubject = new BehaviorSubject<Contrato>({
    numero: '', prestador: '', fimVigencia: '', inicioVigencia: '', objeto: ''
  });

  constructor(http: HttpClient) {
      super('contratos', http);
  }

  get selectedContract(): Contrato{
    return this.selectedContractSubject.value;
  }

  set selectedContract(contract: Contrato) {
    this.selectedContractSubject.next(contract);
  }
}
