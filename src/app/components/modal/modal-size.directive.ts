import { ModalComponent } from './modal.component';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[modalSize]'
})
export class ModalSizeDirective {

  @Input('modalSize') dialogSize!: string;

  private sizeOptions = ['sm', 'lg', 'xl'];

  constructor(private component: ModalComponent) { }

  ngAfterViewInit() {
    const dialog = this.component.dialogRef.nativeElement;
    if (this.sizeOptions.includes(this.dialogSize)) {
      dialog.classList.add(`modal-${this.dialogSize}`);
    }
  }
}
