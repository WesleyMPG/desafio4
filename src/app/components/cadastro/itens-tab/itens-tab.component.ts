import { Component, OnInit, ViewChild } from '@angular/core';

const itens = [
  {
    servico: "Serviço 1",
    quantidade: 1,
    valor: 10,
    valorTotal: 10,
  }
];

@Component({
  selector: 'app-itens-tab',
  templateUrl: './itens-tab.component.html',
  styleUrls: ['./itens-tab.component.scss']
})
export class ItensTabComponent implements OnInit {

  tableColumns = ['Serviço', 'Quantidade', 'Valor unitário',
                  'Valor Total', 'Itens'];
  items = itens;
  totalValue = 0;

  constructor() { }

  ngOnInit(): void {
    this.items.forEach((i) => {
      this.totalValue += i.valor;
    });
  }

}
