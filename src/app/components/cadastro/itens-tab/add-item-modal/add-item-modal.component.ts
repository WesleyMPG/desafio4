import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItensService } from '../../../../services/itens.service';
import { ContratosService } from '../../../../services/contratos.service';
import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;
  @Input() mode!: 'buffer' | 'noBuffer';

  form!: FormGroup;

  constructor(private itensService: ItensService,
              private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      service: new FormControl('', [Validators.required, Validators.minLength(2)]),
      qtd: new FormControl(1, [Validators.required, Validators.min(1)]),
      val: new FormControl(1, [Validators.required, Validators.min(0.01)]),
    })
  }

  createItem() {
    if (this.form.valid) {
      const {service, qtd, val} = this.form.value;
      const item = {
        servico: service,
        quantidade: qtd,
        valor: val,
      }
      this._create(item);
      this.clearFields();
    }
  }

  clearFields = () => {
    this.form.setValue({service: '', qtd: 1, val: 1});
  }

  private _create(item: Item) {
    if (this.mode == 'buffer') {
      this.itensService.itensToCreate.push(item);
      if (this.parentUpdate) this.parentUpdate();
    } else {
      item.contrato_id = this.contratosService.selectedContract.id;
      this.itensService.create(item).subscribe(i => {
        if (this.parentUpdate) this.parentUpdate();
      });
    }
  }
}
