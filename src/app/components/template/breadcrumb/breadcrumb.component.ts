import { TemplateService } from './../../../services/template.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PathItem } from '../../../models/breadcrumb-data.model';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  path!: PathItem[];

  @ViewChild('list') listRef!: ElementRef;

  constructor(private templateService: TemplateService) {
    this.path = templateService.breadcrumbPath;
    this.templateService.breadcrumbDataSubject.subscribe((data) => {
      this.path = templateService.breadcrumbPath;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
