import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItensService } from '../../../../services/itens.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  @Input() parentUpdate!: Function;

  form!: FormGroup;

  constructor(private itensService: ItensService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      service: new FormControl('', [Validators.required, Validators.minLength(2)]),
      qtd: new FormControl(1, [Validators.required, Validators.min(1)]),
      val: new FormControl(1, [Validators.required, Validators.min(0.01)]),
    })
  }

  createItem() {
    if (this.form.valid) {
      const fields = this.form.value;
      const item = {
        servico: fields.service,
        quantidade: fields.qtd,
        valor: fields.val,
      }
      this.itensService.create(item).subscribe(i => {
        if (this.parentUpdate) this.parentUpdate();
      });
      this.clearFields();
    }
  }

  clearFields = () => {
    this.form.setValue({service: '', qtd: 1, val: 1});
  }

}
