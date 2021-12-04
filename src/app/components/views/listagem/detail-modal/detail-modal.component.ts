import { Component, OnInit, Input } from '@angular/core';
import { ItensService } from '../../../../services/itens.service';
import { ContratosService } from '../../../../services/contratos.service';
import { Contrato } from '../../../../models/contrato.model';


@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  @Input() parentUpdate!: Function;
  contract!: Contrato;

  constructor(private itensService: ItensService,
              private contratosService: ContratosService) {
    contratosService.selectedContractSubject.subscribe(contrato => {
      this.contract = contrato;
    });
  }

  ngOnInit(): void {
  }


  deleteContract(){
    const id = <string><unknown>this.contract.id;
    this.contratosService.delete(id).subscribe(i => {
      if (this.parentUpdate) this.parentUpdate();
      this.itensService.deleteContractItems(<number>this.contract.id)
        .subscribe(() => {});
    });
  }
}
