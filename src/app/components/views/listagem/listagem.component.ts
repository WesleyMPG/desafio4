import { Component, OnInit } from '@angular/core';
import { TemplateService } from './../../../services/template.service';
import { ContratosService } from './../../../services/contratos.service';
import { ItensService } from './../../../services/itens.service';
import { Contrato } from '../../../models/contrato.model';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  tableColumns = ['Número', 'Prestador', 'Início', 'Término', 'Ações'];
  contracts!: Contrato[];

  constructor(private templateService: TemplateService,
              private contratosService: ContratosService,
              private itensService: ItensService) {
    templateService.sidebarData = {
      collapsed: false,
      selectedItem: 1,
    };
    templateService.breadcrumbPath = [{
      name: "Listagem",
      link: '/listagem',
    }];
  }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts = () => {
    this.contratosService.getAll().subscribe(contratos => {
      this.contracts = contratos;
    })
  }

  set selectedContract(i: Contrato) {
    this.contratosService.selectedContract = i;
  }

}
