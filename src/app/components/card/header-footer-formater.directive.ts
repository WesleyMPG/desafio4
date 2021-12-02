import { CardComponent } from './card.component';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[HFF]'
})
export class HeaderFooterFormaterDirective {

  @Input('justifyHeaderContent') justifyHeader!: string;
  @Input('justifyFooterContent') justifyFooter!: string;
  @Input('noFooter') noFooter!: string;

  private justifyOptions = ['start', 'end', 'center', 'between',
    'around', 'evenly'];

  constructor(private component: CardComponent) { }

  setJustify(el: ElementRef, justifyValue: string) {
    if (this.justifyOptions.includes(justifyValue)) {
      el.nativeElement.classList.remove = 'justify-content-start';
      el.nativeElement.classList.add(`justify-content-${justifyValue}`);
    }
  }

  ngAfterViewInit() {
    const hWrapper = this.component.headerWrapper;
    const fWrapper = this.component.footerWrapper;
    this.setJustify(hWrapper, this.justifyHeader);
    this.setJustify(fWrapper, this.justifyFooter);

    const footer = this.component.footer.nativeElement;
    if (this.noFooter === '') {
      footer.style.display = 'none';
    }
  }
}
