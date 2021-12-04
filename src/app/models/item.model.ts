import { BaseModel } from './base.model';

export interface Item extends BaseModel{
    contrato_id?: number,
    servico: string,
    quantidade: number,
    valor: number,
};