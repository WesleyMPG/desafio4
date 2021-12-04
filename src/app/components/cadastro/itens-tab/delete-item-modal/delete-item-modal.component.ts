import { Component, OnInit, Input } from '@angular/core';
import { ItensService } from '../../../../services/itens.service';
import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.scss']
})
export class DeleteItemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;
  @Input() item!: Item;

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
    const id = <string><unknown>this.item.id;
    this.itensService.delete(id).subscribe(i => {
      if (this.parentUpdate) this.parentUpdate();
    });

  }

}
