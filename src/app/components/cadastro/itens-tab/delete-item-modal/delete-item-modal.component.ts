import { Component, OnInit, Input } from '@angular/core';
import { ItensService } from '../../../../services/itens.service';
import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.scss']
})
export class DeleteItemModalComponent implements OnInit {

  @Input() mode!: 'buffer' | 'noBuffer';
  @Input() parentUpdate!: Function;
  item!: Item;

  totalValue!: number;

  constructor(private itensService: ItensService) {
    itensService.selectedItemSubject.subscribe(i => {
      this.item = i;
      this.totalValue = i.quantidade * i.valor;
    });
  }

  ngOnInit(): void {
  }

  deleteItem() {
    if (this.mode == 'buffer') {
      this._deleteFromBuffer();
    } else {
      this._deleteFromServer();
    }
  }

  private _deleteFromBuffer() {
    let i = this.itensService.itensToCreate.indexOf(this.item);
    this.itensService.itensToCreate.splice(i, 1);
    if (this.parentUpdate) this.parentUpdate();
  }

  private _deleteFromServer() {
    const id = <string><unknown>this.item.id;
    this.itensService.delete(id).subscribe(i => {
      if (this.parentUpdate) this.parentUpdate();
    });
  }
}
