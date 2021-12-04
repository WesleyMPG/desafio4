import { SidebarData } from './../components/template/sidebar/sidebar-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbData, PathItem } from '../components/template/breadcrumb/breadcrumb-data.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

   sidebarDataSubject = new BehaviorSubject<SidebarData>({
    collapsed: true,
    selectedItem: -1,
  });

  breadcrumbDataSubject = new BehaviorSubject<BreadcrumbData>({
    path: [{name: 'Início', link: ''}]
  });

  constructor() { }

  get sidebarData(): SidebarData {
    return this.sidebarDataSubject.value;
  }

  set sidebarData(data: SidebarData) {
    this.sidebarDataSubject.next(data);
  }

  get breadcrumbPath(): PathItem[] {
    return this.breadcrumbDataSubject.value.path;
  }

  set breadcrumbPath(path: PathItem[]) {
    if (path[0] != this.breadcrumbPath[0]){
      path = [this.breadcrumbPath[0], ...path];
    }
    this.breadcrumbDataSubject.next({path});
  }
}
