import { Item } from './../../../models/item.model';
import { ItensService } from './../../../services/itens.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-itens-tab',
  templateUrl: './itens-tab.component.html',
  styleUrls: ['./itens-tab.component.scss']
})
export class ItensTabComponent implements OnInit {

  tableColumns = ['Serviço', 'Quantidade', 'Valor unitário',
                  'Valor Total', 'Editar'];
  items!: Item[];
  totalValue = 0;

  constructor(private itensService: ItensService) { }

  ngOnInit(): void {
    this.loadItems()
  }

  set selectedItem(i: Item) {
    this.itensService.selectedItem = i;
  }

  loadItems = () => {
    this.itensService.getAll().subscribe(itens => {
      this.totalValue = 0;
      this.items = itens;
      this.items.forEach((i) => {
        this.totalValue += i.valor * i.quantidade;
      });
    });
  }


}
