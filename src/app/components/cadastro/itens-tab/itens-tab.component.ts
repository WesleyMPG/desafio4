import { Item } from './../../../models/item.model';
import { ItensService } from './../../../services/itens.service';
import { ContratosService } from './../../../services/contratos.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-itens-tab',
  templateUrl: './itens-tab.component.html',
  styleUrls: ['./itens-tab.component.scss']
})
export class ItensTabComponent implements OnInit {

  @Input() mode!: 'buffer' | 'noBuffer';

  tableColumns = ['Serviço', 'Quantidade', 'Valor unitário',
                  'Valor Total', 'Editar'];
  items!: Item[];
  totalValue = 0;

  constructor(private itensService: ItensService,
              private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.loadItems()
  }

  set selectedItem(i: Item) {
    this.itensService.selectedItem = i;
  }

  loadItems = () => {
    this.totalValue = 0;
    if (this.mode == 'buffer') {
      this._loadBuffer();
    } else {
      this._loadServer()
    }
  }

  private _loadBuffer() {
    this.items = this.itensService.itensToCreate;
    this.items.forEach((i) => {
      this.totalValue += i.valor * i.quantidade;
    });
  }

  private _loadServer() {
    const id = <number>this.contratosService.selectedContract.id;
    this.itensService.getContractItems(id).subscribe(itens => {
      this.items = itens;
      this.items.forEach((i) => {
        this.totalValue += i.valor * i.quantidade;
      });
    });
  }

}
