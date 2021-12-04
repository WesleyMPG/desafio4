import { BaseModel } from './base.model';

export interface Projeto extends BaseModel {
    nome: string,
    orcamento: number,
    orcRestante: number,
};
