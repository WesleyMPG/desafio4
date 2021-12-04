import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './base-crud.service';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService extends BaseCrudService<Projeto> {

  constructor(http: HttpClient) {
      super('projetos', http);
  }

}
