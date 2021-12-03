import { Component, OnInit } from '@angular/core';


const projetos = [
  {
    nome: 'Projeto 1',
    valorTotal: 10
  },
 
]

@Component({
  selector: 'app-projetos-tab',
  templateUrl: './projetos-tab.component.html',
  styleUrls: ['./projetos-tab.component.scss']
})
export class ProjetosTabComponent implements OnInit {

  tableColumns = ['Projeto', 'Valor Total']
  projects = projetos;

  constructor() { }

  ngOnInit(): void {
  }

}
