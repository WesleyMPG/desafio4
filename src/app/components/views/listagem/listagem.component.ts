import { TemplateService } from './../../../services/template.service';
import { Component, OnInit } from '@angular/core';

const contratos = [
  {
    numero: '012/2021',
    prestador: '12345678901234',
    valor: 175,
    inicioVigencia: '2021-12-1T00:00',
    fimVigencia: '2022-12-1T00:00',
  }
];

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  tableColumns = ['Número', 'Prestador', 'Valor', 'Início', 'Término'];
  contracts = contratos;

  constructor(private templateService: TemplateService) {
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
  }

}
