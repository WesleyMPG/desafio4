import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItensService } from '../../../../services/itens.service';
import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-update-item-modal',
  templateUrl: './update-item-modal.component.html',
  styleUrls: ['./update-item-modal.component.scss']
})
export class UpdateItemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;
  @Input() mode!: 'buffer' | 'noBuffer';

  private item!: Item;
  form!: FormGroup;

  constructor(private itensService: ItensService) {
    itensService.selectedItemSubject.subscribe(i => {
      this.item = i;
      this.clearFields();
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      service: new FormControl('', [Validators.required, Validators.minLength(2)]),
      qtd: new FormControl(1, [Validators.required, Validators.min(1)]),
      val: new FormControl(1, [Validators.required, Validators.min(0.01)]),
    })
  }

  updateItem() {
    if (this.form.valid) {
      const fields = this.form.value;
      const item = {...this.item,
        servico: fields.service,
        quantidade: fields.qtd,
        valor: fields.val,
      }
      this._update(item);
    }
  }

  clearFields = () => {
    if (this.form) {
      const i = this.item;
      this.form.setValue({service: i.servico, qtd: i.quantidade, val: i.valor});
    }
  }

  private _update(item: Item) {
    if (this.mode == 'buffer') {
      let i = this.itensService.itensToCreate.indexOf(this.item);
      this.itensService.itensToCreate[i] = item;
      if (this.parentUpdate) this.parentUpdate();
    } else {
      this.itensService.update(item).subscribe(i => {
        if (this.parentUpdate) this.parentUpdate();
      });
    }
  }

}
