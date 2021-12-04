import { SidebarData } from './sidebar-data.model';
import { TemplateService } from './../../../services/template.service';
import { Component, OnInit, ViewChild, 
         ViewChildren ,ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('collapseBtn') collapseBtn!: ElementRef;
  @ViewChild('collapseView') collapseView!: ElementRef;
  @ViewChildren('item') items!: QueryList<ElementRef>;

  constructor(private templateService: TemplateService) { }

  get collapsed(): string {
    const c = this.templateService.sidebarData.collapsed;
    return (c) ? 'collapsed' : '';
  }

  get show(): string {
    const c = this.templateService.sidebarData.collapsed;
    return !(c) ? 'show' : '';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const subject = this.templateService.sidebarDataSubject;
    subject.subscribe((data: SidebarData) => {
      this.selectItem();
    });
  }

  selectItem() {
    const selected = this.templateService.sidebarData.selectedItem;
    for (let i = 0; i < this.items.length; i++) {
      const el = this.items.get(i);
      if (i == selected) {
        el?.nativeElement.classList.add('list-group-item-active');
      } else {
        el?.nativeElement.classList.remove('list-group-item-active');
      }
    }
  }
}
