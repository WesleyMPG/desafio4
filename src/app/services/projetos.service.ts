import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService extends BaseCrudService<Projeto> {

  constructor(http: HttpClient) {
      super('projetos', http);
  }

  /// Pega apenas os projetos com orçamento restante > 0
  getValid(): Observable<Projeto[]> {
    const url = `${this.baseUrl}?orcRestante_gte=1`;
    return this.http.get<Projeto[]>(url);
  }

}
