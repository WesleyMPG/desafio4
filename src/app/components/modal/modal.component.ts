import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    'class': 'modal fade',
    'tabindex': '-1',
  }
})
export class ModalComponent implements OnInit {

  @ViewChild('closeBtn') public closeBtnRef!: ElementRef;
  @ViewChild('dialog') public dialogRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }
}
