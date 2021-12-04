import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    'tabindex': '-1',
  }
})
export class ModalComponent implements OnInit {

  @ViewChild('closeBtn') closeBtnRef!: ElementRef;
  @ViewChild('dialog') dialogRef!: ElementRef;

  @Input() onClose!: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.onClose) {
      this.onClose = () => {};
    }
  }
}
