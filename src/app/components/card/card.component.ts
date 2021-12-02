import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('headerWrapper') headerWrapper!: ElementRef;
  @ViewChild('footerWrapper') footerWrapper!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
