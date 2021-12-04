import { HttpClient } from '@angular/common/http';
import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ItensService extends BaseCrudService<Item>{

  itensToCreate = Array<Item>();

  selectedItemSubject = new BehaviorSubject<Item>({
    servico: '', quantidade: 0, valor: 0
  });

  constructor(http: HttpClient) {
      super('itens', http);
  }

  get selectedItem(): Item {
    return this.selectedItemSubject.value;
  }

  set selectedItem(item: Item) {
    this.selectedItemSubject.next(item);
  }

  createPendingItems(contratoId: number) {
    while (this.itensToCreate.length > 0) {
      let i = <Item>this.itensToCreate.pop();
      i.contrato_id = contratoId;
      this.create(i).subscribe(() => {});
    }
  }

  getContractItems(contratoId: number): Observable<Item[]>  {
    const url = `${this.baseUrl}?contrato_id=${contratoId}`;
    return this.http.get<Item[]>(url);
  }

  deleteContractItems(contratoId: number): Observable<Item[]>  {
    const i = this.getContractItems(contratoId);
    i.subscribe(items => {
      items.forEach((item => {
        this.delete(<string><unknown>item.id).subscribe(() => {});
      }));
    });
    return i;
  }
}
