import { HttpClient } from '@angular/common/http';
import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ItensService extends BaseCrudService<Item>{

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
}
