import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TemplateService } from './../../../services/template.service';
import { ContratosService } from '../../../services/contratos.service';
import { ItensService } from '../../../services/itens.service';
import { Contrato } from '../../../models/contrato.model'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  geralForm = new FormGroup({});

  constructor(private templateService: TemplateService,
              private contratosService: ContratosService,
              private itensService: ItensService) {
    templateService.sidebarData = {
      collapsed: false,
      selectedItem: 0,
    };
    templateService.breadcrumbPath = [{
      name: "Cadastro",
      link: '/cadastro',
    }];
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.geralForm.valid) {
      let { inicioVigencia, fimVigencia } = this.geralForm.value;
      inicioVigencia = new Date(inicioVigencia).toISOString();
      fimVigencia = new Date(fimVigencia).toISOString();

      const contrato: Contrato = {...this.geralForm.value,
                                  inicioVigencia,
                                  fimVigencia};

      this.contratosService.create(contrato).subscribe(contr => {
        this.itensService.createPendingItems(<number>contr.id);
      });
    }
  }
}
