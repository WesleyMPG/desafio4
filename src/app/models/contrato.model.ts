import { BaseModel } from './base.model';

export interface Contrato extends BaseModel {
  numero: string,
  prestador: string,
  projeto_id?: number,
  inicioVigencia: string,
  fimVigencia: string,
  objeto: string,
  valor?: number,
  itens?: Array<number>,
}
