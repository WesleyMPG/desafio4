import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjetosService } from '../../../services/projetos.service';
import { ItensService } from '../../../services/itens.service';
import { Projeto } from '../../../models/projeto.model';

@Component({
  selector: 'app-geral-tab',
  templateUrl: './geral-tab.component.html',
  styleUrls: ['./geral-tab.component.scss']
})
export class GeralTabComponent implements OnInit {

  @Input() form!: FormGroup;
  validProjects!: Projeto[];

  constructor(private projetosService: ProjetosService,
              private itensService: ItensService) { }

  ngOnInit(): void {
    this.form.addControl('numero',
      new FormControl('', [Validators.pattern(/\d{3}\/\d{4}/),
                           Validators.required]));
    this.form.addControl('prestador',
      new FormControl('', [Validators.minLength(8), Validators.required]));
    this.form.addControl('projeto_id',
      new FormControl('', [Validators.required]));
    this.form.addControl('inicioVigencia',
      new FormControl(this.dateToString(new Date(Date.now())),
                                        [Validators.required]));
    this.form.addControl('fimVigencia',
      new FormControl(this.dateToString(new Date(Date.now())),
                                        [Validators.required]));
    this.form.addControl('objeto',
      new FormControl('', [Validators.minLength(3), Validators.required]));

    this.projetosService.getValid().subscribe(projetos => {
      this.validProjects = projetos;
    });
  }

  dateToString = (date: Date): string => {
    let d = date.getDate().toString();
    let m = date.getMonth(), y = date.getFullYear();
    d = (d.length == 1) ? '0' + d : d;
    return `${y}-${m}-${d}`;
  }
}
