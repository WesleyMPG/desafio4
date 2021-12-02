import { ModalComponent } from './modal.component';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[closeBtnSecondary]'
})
export class CloseBtnStyleDirective {

  constructor(private component: ModalComponent) {}
  
  ngAfterViewInit() {
    const btn = this.component.closeBtnRef.nativeElement;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
  }
}
