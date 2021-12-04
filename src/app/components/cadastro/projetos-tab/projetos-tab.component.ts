import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../../models/projeto.model';
import { ProjetosService } from '../../../services/projetos.service';


@Component({
  selector: 'app-projetos-tab',
  templateUrl: './projetos-tab.component.html',
  styleUrls: ['./projetos-tab.component.scss']
})
export class ProjetosTabComponent implements OnInit {

  tableColumns = ['Projeto', 'Orçamento', 'Orçamento restante',
                  'Orçamento usado'];
  projects!: Projeto[];

  constructor(private projetoService: ProjetosService) { }

  ngOnInit(): void {
    this.projetoService.getAll().subscribe(projetos => {
      this.projects = projetos;
    })
  }

}
