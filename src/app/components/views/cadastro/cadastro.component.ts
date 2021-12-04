import { TemplateService } from './../../../services/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private templateService: TemplateService) {
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

}
